"use strict";
// first thing to notice that the file ends with .ts
// the goal behind this app to show how is ts useful
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// attempting to do http request 
// this is async request , so , we are gonna get promise
axios_1["default"].get(url).then(function (res) {
    console.log(res.data);
});


// now to see what ts do to code base 
// run in terminal 
// tsc nameOfTheFile  
// you'll see that a second file been created with the same file name but ends with sameFileName.js
// this file has complied all the ts code into plain js code 


// now to run this , we use the node command line 
// node fileName.js
// and the result is 
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }


