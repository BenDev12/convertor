class Services {
 
  static async symbol_destructre(Country) {
      var sym= Country.currencies.map((currencies) => {
           return currencies.code;
       });
      
       return sym;
  }

  static async name_destructure(Country){
     var cur_name =   Country.currencies.map((currencies) => {
           return currencies.name;
       });
       return cur_name;
  }

  static validateEmail(email) {
      var isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(isValid)) {
        return true
      }else{
        return false
      }
  }
}
export default Services
