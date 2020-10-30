// by conviction any file that we are using classes in it and export it, then
// we Capitalize it

// if we hover over the faker module, we will see that we could not 
// find a declaration for it , and ask us to install 
// another module called @types/faker @read about the type definition in ts /check readme.md
import faker from "faker"
export class User {
  // in case we hard coded value , we initialize the properties 
  // on the same line 
  // but here we have a random data
  // or we can do it in the constructor. also these for ts
  name:string;
  location: {
    // we can use latitude and longitude to model 
    // a physical location in the world
    lat:number;
    lng:number;
  }

  constructor(){
    this.name = faker.name.findName();
    this.location = {
      // in the faker lib , both lat and lng are string 
      // to fix this , js has built-in function to make them 
      // numbers
      lat: parseFloat( faker.address.latitude()),
      lng:parseFloat(faker.address.longitude())
    }
  }
}
