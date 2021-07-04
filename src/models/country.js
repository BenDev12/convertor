import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const countryListSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    population: {
        type: Number,
        required: true,
    },
    currencies: {
        type: String,
    },
    rates: {
        type: Number,
        required: true,
    },
    created_by: {
        type: String,
    },
});


const CountryList = mongoose.model('CountryList', countryListSchema)

export default CountryList