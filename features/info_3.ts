// arrays 
// when we work with arrays in ts , we make sure that we are dealing only with one type? 
// it means, try to make the elements inside the array are consistent either string or number whatever value you are trying to solve

let car:string[] = ['ford' , "bmw" , "whatever"] // --> consistent
let cars = [] //-> any , try to avoid this
let carMake:string[] [] = [] //--> 2d arrays with strings


// to make arrays contain different value type
let arr:(string | Date | number)[]= [new Date(), "One" , 3]



// tuples
// they look like an array because they have the same structure that contain multiple different properties to define one single thing
// now imagine that we have this object that represents a drink

let objDrink = {
  color:"brown",
  carbonated:true,
  sugar:40
}

// now as js devs , we understand this is an object and we now it's about a drink
// i want to put in other data structure 
let oldDrinkTuple = [ 'brown' , true , 40] 
// wait , this is array and if we look at at it has random elements , what are these ?
// so tuple is like arrays but we its element in order 
// but hey , we can change the order inside the drink array
oldDrinkTuple[0] = true
oldDrinkTuple[1] = 40
// now we got lost to fix this 
// imagine this is new tuple and ignore that we use the drink tuple above
let newDrinkTuple: [string, boolean, number] = [ 'brown' , true , 40] 
// now lets try to change the order
newDrinkTuple[0] = false //--> warning 


// now what if we have a thousand different drink with the same order , should we always choose write the order like this?
// ts provides us a type alias where you can write them once and use them everywhere
type Drink = [string, boolean, number]
let d_1: Drink = ["fff" , false , 10]
let d_2: Drink = ['ccc' , true , 11]
let d_3: Drink = ["rrr" , false , 12]
let d_4: Drink = ["fff" , false , 10]