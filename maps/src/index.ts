// // the code here will be parsed and complied into js in the browser through parcel-bundler
// import {User} from "./User"
// import {Company} from "./Company"


// google is referencing to the global variable 
// to create an instant of a class we use the new keyword
// to create an optional var in ts use the ?  at the end
new google.maps.Map(document.getElementById("map"), {
  // if you check the documentation of the map object you'll find that has second option argument you can 
  // pass and which is an object, this object is also full of options you can use 
  // read the documentation 
  /**
   * @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions}
   */
  zoom:1,
  center:{
    lat:0,
    lng:0
  }
})