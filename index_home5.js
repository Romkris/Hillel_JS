//ДЗ 7.1. Робота з обьектом

const card = {
    nameOwner: "Evgen",
    limit: 5000,
    type: "UAH",
  
    getInfo(){
      for (let key in this){
        if (typeof this[key] !== 'function'){
          console.log(`${key}: ${this[key]}`);
        }
      }
    } 
  };
  
  card.getInfo();
  card.abilityGetCashback = true;
  card.getInfo();
  

  
  
  //ДЗ 7.2. Сума вартості послуг
  
  let services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн",
  
  
    price() {
      let sumService = 0
      for ( let key in this) {
         if (typeof this[key] === "string") {
          let price = Number.parseFloat(this[key]);
          sumService += price;
         }
      }
      return sumService
    },
  
    minPrice() {
      let allPrices = [];
      for (let key in this){
        if (typeof this[key] === "string") {
          let eachPrice = Number.parseFloat(this[key]);
          allPrices.push(eachPrice)
        }
      }
     return  Math.min(...allPrices);
    },
  
    maxPrice() {
      let allPrices = [];
      for (let key in this){
        if (typeof this[key] === "string") {
          let eachPrice = Number.parseFloat(this[key]);
          allPrices.push(eachPrice)
        }
      }
     return  Math.max(...allPrices);
    }
  }
    services['гоління на лисо'] = "200 грн";
    console.log(services.price());
    console.log(services.minPrice());
    console.log(services.maxPrice());