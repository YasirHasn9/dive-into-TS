// // the code here will be parsed and complied into js in the browser through parcel-bundler
/*

// google is referencing to the global variable 
// to create an instant of a class we use the new keyword
// to create an optional var in ts use the ?  at the end
new google.maps.Map(document.getElementById("map"), {
  // if you check the documentation of the map object you'll find that has second option argument you can 
  // pass, which is an object, this object is also full of options you can use 
  // read the documentation 
   @see {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions}
   
  zoom:1,
  center:{
    lat:0,
    lng:0
  }
})    

// so the map object/class holds a lot of methods/functions
// we are here kinda concerned about the next developer to play with 
// them , so we aim to make them hidden 
// to make this ?
// we need to make a way to limit the access to these functions
// by making this file so limit
// so we are making a custom map that can do this for us
// you only make new map and called the function that we created 
// inside
*/

import {CustomMap} from "./CustomMap"

new CustomMap("map") // the googleMap inside is private