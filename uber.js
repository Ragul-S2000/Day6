class Uber_Price {
    constructor(baseprice,distance) {
        this.baseprice = baseprice;
      this.distance = distance;
      
    }
    getPrice() {
      return this.baseprice*this.distance;
    }
  }
  
  let uber = new Uber_Price(20,10);
  console.log(uber.getPrice());
