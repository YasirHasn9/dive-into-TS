// arrays 
// when we work with arrays in ts , we make sure that we are dealing only with one type? 
// it means, try to make the elements inside the array are consistent either string or number whatever value you are trying to solve

let car:string[] = ['ford' , "bmw" , "whatever"] // --> consistent
let cars = [] //-> any , try to avoid this
let carMake:string[] [] = [] //--> 2d arrays with strings


// to make arrays contain different value type
let arr:(string | Date | number)[]= [new Date(), "One" , 3]