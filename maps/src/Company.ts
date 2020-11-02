import faker from "faker"

export class Company {

  // remember that here we are not assign anything to vars 
  // we are just telling ts the types
  companyName:string;
  catchPhrase:string
  location:{
    lat:number;
    lng:number;
  }
  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat:parseFloat(faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }
}