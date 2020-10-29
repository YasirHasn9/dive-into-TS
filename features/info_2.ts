// type annotation vs type inference  for function  objects , arrays
/*
with function there may be extra code for ts to make it your friend , ts tries to help , and all you can do for it 
is to communicate with her
so again with function ,annotation will tell the ts what type of arguments the function will receive and return 
                       inference is kinda lazy and it only cares for the types that been returned 
*/

const add = (a:number,b:number):number => {
  return a + b 
}
function add_1(a:number, b:number):number{
  return a + b
}


// you and i , will always use annotation when writing a function because we can make mistakes easily 
// when we dont use them the ts will okey this is void. in case we forget to return anything , also the ts will not warn us
// because we have not told hey the return value should certain value type 
// like this 

let subtract = (a:number , b : number) => {
  a -b
}

// hover over the function and you will see that ts just say that this function in just void



// object 
// destructuring with annotation 
let todayWeather = {
  date: new Date(),
  weather: "sunny"
}

const logWeather_1 = (obj: {date:Date , weather:string}):void => {
  console.log(obj.date)
  console.log(obj.weather)
}


// to work with destructuring 
// here we are pulling out the keys that we want to use form the receiving object and use them as in the { } against the { annotation}
const logWeather_2 = ({date , weather}: {date: Date , weather:string}):void => {
  console.log(date)
  console.log(weather)
}


let profile = {
  name:"Yasir",
  age:30,
  cor: {
    lat:50,
    lng:100
  },
  setAge(age:number):void {
    this.age = age
  }
}

let {age, name}: {age:number, name:string} = profile

let {cor: {lat,lng}} : {cor:{lat:number; lng:number}} = profile