import CountryList from '@models/country'
import axios from 'axios'
import Services from '@utils/helper/destructure'
import Rates from '@utils/helper/fixer_services'
import { config } from 'dotenv';


const Base_url = config.country_url;


 export default {
     Query: {
         country: async (_, args,req) => {
           
             if(!req.auths){
                 throw new Error("Not authenticated")
             }
             try {
                 const response = await axios.get(
                     `${Base_url}/${args.name}?fields=name;population;currencies`
                 );
                 if (!response) {
                     throw new Error('Country with specified name does not exist');
                 }
                 const [Country] = response.data;

                 console.log(Country)
               
                 const symbol = await Services.symbol_destructre(Country);

                 const rates = await Rates.lates({ base: 'EUR', symbol });

                 const currencies = await Services.name_destructure(Country);
        
                 const name = Country.name;

                 const population = Country.population;
                
                 
                 return {name, population, currencies, rates};

             } catch (error) {
                 throw error;
             }
         },
         latest: async (_, { base, symbols}) => {
             try {
                 const response = await fixer.latest({ base, symbols });
               
                return response

             } catch (error) {
                 console.log(error);
             }
         },

         getList: async(_,)=>{
             console.log('list')
           
             try {
                 const list = await CountryList.find();
                 if(!list) throw new Error('No lists found')
                 console.log(list)
                 return   list
             } catch (error) {
                 console.log(error)
                 throw error
             }
         }
     },

     Mutation: {
         createList: async (_, args) => {
                console.log(args)
             try {
                 const country = new CountryList(args);
                 await country.save();
                 console.log(country)
                 const message='List created sucessfully'
                 return {country, message};
             } catch (error) {
                 throw error;
             }
         },

         convert: async (_, { from, to, amount })=>{
                try {
                 const response = await Rates.convert({ from, to, amount });
                 return { response };
                } catch (error) {
                    throw error
                }

         }
     },
 };
