// interface it a type checking focuses on the shape of values
// creates new type 
// describing the property names
// and types values of an object

interface TypeChecker {
  name:string;
  year:number;
  broken:boolean;
  // we can even pass function checker here
  summary():string
}
let oldCivic = {
  name:"Civic",
  year: 2000,
  broken:true,
  summary(): string {
    return `name: ${this.name}`
  }
}

let printVehicle = (vehicle:TypeChecker ):void => {
  console.log(vehicle.summary())
}

printVehicle(oldCivic)

// ts does not care for the order since it the interface has the property 
//  to code reusable with ts 
// creates functions that accept arguments that are types with interfaces
// all the function that we are writing , we are gonna try to make their argument types with 
// interfaces as possible as we can

// objects/class can decide to implement given interface to work with a function
// make the interfaces as general as we can 


//  the goal of interface is to create new type 
// when we are creating a new interface to an abject 
// and inside that interface we write some properties with the type 
// value for each key 
// ts will go through the keys in the object and tries to make sure that whatever key 
// we have used in the interface is in the object 