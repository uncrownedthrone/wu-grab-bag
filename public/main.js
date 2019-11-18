const qs = e => document.querySelector(e)

// const addToList = () => {
//   const getInput = document.getElementById('stringList').value
//   const userInput = document.getElementById('input').value
//   const createItem = document.createElement('li')
//   createItem.appendChild(document.createTextNode(userInput))
//   createItem.appendChild(getInput)
//   console.log(createItem)
// }

{
  /* <ol id="demo"></ol>
and get a reference to it: */
}

var list = document.getElementById('demo')

// In your event handler, create a new list element with the input value as content and append to the list with Node.appendChild [MDN]:

var firstname = document.getElementById('firstname').value
var entry = document.createElement('li')
entry.appendChild(document.createTextNode(firstname))
list.appendChild(entry)

qs('.search').addEventListener('click', addToList)
