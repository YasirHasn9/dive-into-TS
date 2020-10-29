// remember that annotation extra code to tell ts what type of value 
let apples : number = 5 
// now if try to assign apples to different data type , ts will tell us


// apples = "name" // wrong
apples = 20 // correct

let name: string = "Yasir"
// again if we try to use with different data type , we are gonna error
// name  = 10

let nothingMore: null = null
let what:undefined = undefined


// and also goes with built in object function 

let now: Date = new Date()


// arrays
// here we want an array that contains only string data types
let colors: string[] = ['red' , 'green']
colors.push("yellow")
colors.push(3) // this tells that there is value that not a string type will be added to the colors array
console.log(colors)


// numbers 
let nums: number[ ] = [1,2,3,4]

nums.push(5) // correct
nums.push("fff") // wrong


// classes
class Fruit {

}

let orange: Fruit = new Fruit()

// with object can long code 
let point: {x:number ; y: number} = {
  x:10,
  y:20
} 

// so , objects 
// let objectName :  {keyName: type of the value to that key} = {
//   keyName : value 
// }


// function 
let logNum: (i:number) => void = (i:number) => {
  console.log(i)
}

// this part is like writing a comment for more information about the function 
// like what is gonna receive , return and so on 
// and since here is gonna return anything , then we are gonna use the ts keyword which void
// let logNum: (i:number) => void  



// 88888 Note 88888
// in ts files , we don't even need to write the type of our data because ts will figure that for us
let friends = 4
// if you have on it , ts tells us that us number
friends = "people" // --> now , we got warning


// rule 
// if we do the declaration and initialization on the same line , ts will figure out what is the value and type.
// but if we don't ts will see it as any --> which means could be any type of value 