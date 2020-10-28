// first thing to notice that the file ends with .ts
// the goal behind this app to show how is ts useful

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'


// attempting to do http request 
// this is async request , so , we are gonna get promise
axios.get(url).then(res => {
  console.log(res.data)
})