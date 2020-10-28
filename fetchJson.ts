// first thing to notice that the file ends with .ts
// the goal behind this app to show how is ts useful

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'


// fix the bug in the console.log down below
// ----------------------------------------------
// ixnterface in ts , it defines the structure of js object
// we are saying inside our app , there is an object called Todo that has 3 properties
// we are telling this to ts to make sure that data we are receiving , has this kind of data structure
//  also inside the interface , we can ignore properties if we want 
interface Todo {
  id:number;
  title:string;
  completed: boolean
}

// attempting to do http request 
// this is async request , so , we are gonna get promise
axios.get(url).then(res => {
  // to link the interface to the todo var , which the object that we are getting from the api
  // by using the as Todo
  const todo = res.data as Todo


  // here we made a mistake , but we couldn't catch it unless we executed it
  // now, it been fixed , the editor will warn you about mistakes you have made in before
  // let id = todo.ID; ----> old and bad mistake , will be underlying 
  let id = todo.id
  // let title = todo.Title; // ----> old and bad mistake will be underlyin
  let title = todo.title
  // let finished = todo.finished; ----> old and bad mistake, will be underlyin
  let completed = todo.completed

  console.log(`
  The todo with ID: ${id}
  Has a title of : ${title}
  Is it completed: ${completed}
  `)
//  fixed this code by using ts in the interface Todo
})

// what is the goal here ?
// ts helps to catch the errors during the development