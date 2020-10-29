// type annotation vs type inference  for variables

// mainly, we are gonna focus on the type inference 
// but there are 3 cases where we want to use type annotation over inference
// 1. when a function return any type ; we don't specify the type
let obj_1 = '{"x":10,"y":20}'
let point = JSON.parse(obj_1)

console.log(point)
// if you hover over the point var, you'll notice something

// when it comes to JSON.parse built-in function , yes it may return some known
// type value but in reality it just returns any
let anyValue = "false"
let outputValue = JSON.parse(anyValue)
console.log(outputValue)

// outputValue: yes , we know is going to be false which is boolean value but this we know it
// ts consider parse is any

// in other words ts can not predict what it comes out of JSON.parse

// to fix this with parse , we use the type annotation
let obj_2 = '{"x":10, "y":20}'
let point_2:{x:number ; y:number} = JSON.parse(obj_2)


// 2) when we declare a var with no initialization
// practical example
let color: string[] = ['red' , 'yellow', 'blue ']

let foundWord:boolean;
for (let word in color){
  if (word == "blue"){
    foundWord = true
  }
}


// 3) a var whose type cannot be inferred correctly
// let say you have a array of number and want to write a function to find certain number 
// as js developer you do this 
let nums: number[] = [1,-99,0]
let numberDownZero = false 
for (let i = 0 ; i < nums.length ; i++){
  if(nums[i] < 0){
    numberDownZero = nums[i]
    // look here , in this case ts will say , hey dude dont play with me we just agreed that numberDownZero is going to be number 
    // and now you are trying to convert to number , no , not on watch
    // so fix this , re-assign the numberDownZero to this
    // numberDownZero:boolean | number = false 
  }
}