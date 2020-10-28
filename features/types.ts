const today = new Date()
// since this is a date type var once we hover over it , ts will tell that
//  now if we type today + . you get suggestions will all the function that the ts has
today.getMonth()

// now if try this with non-exited built-function 
// it will tell you that

// today.yesterday


let person = {
  age: 20
}
// now if try to access something that not exited 
// it will tell that 
person.age
person.name // --> wrong


class Color {

}


// if we hover over it , it will tell you the class they belong too
let anyColor = new Color()

