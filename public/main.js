const qs = e => document.querySelector(e)

const addToList = () => {
  const getInput = document.getElementById('stringList')
  const userInput = document.getElementById('input').value
  const createElement = document.createElement('li')
  createElement.appendChild(document.createTextNode(userInput))
  getInput.appendChild(createElement)
}
qs('.search').addEventListener('click', addToList)
