// Class 
// it is a blueprint to create an object with some fields and methods
// to represent a thing

class Vehicle {
  // these are public methods can be called anywhere
// 
public drive ():void {
  console.log("Chugga chugga")
}
  public honk():void {
    console.log("beep")
  }

  // now to protect the methods 
  protected beep():void {
    // this can be called only from the child
    console.log("beeeeeep")
  }
}

class Car extends Vehicle {
// now car inherit all the methods from the Vehicle 
// but if we want to override the any function 
// we can do that by re-define it
// private drive():void { // to make it private 
   drive():void {
  // this cannot be public this is why we get the warning 
  // but we can called here inside the class
  console.log("Chugga chugga from the car class")
}

calledThePrivateMethod():void {
  // can safely call it here
  this.drive()
  // can be accessed here and no where else
  this.beep()
}
}

const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()
// vehicle.beep() // this is not gonna work

let car = new Car()
// warn
// car.drive()
car.calledThePrivateMethod()


// the reason we are using private method in classes not for security reasons 
// but because that there some methods can manipulate classes so deeply and we don't want other developers to play with it