//get things from element
// console.log(document.getElementById('task-title'))
// console.log(document.getElementById('task-title').id)
// console.log(document.getElementById('task-title').className)
const tasktitle=document.getElementById('task-title')
//change styling
// document.getElementById('task-title').style.background='black'
// document.getElementById('task-title').style.color='#333'
// document.getElementById('task-title').style.padding='5px'


//change content
tasktitle.textContent='Task List'
tasktitle.innerText='My List'
tasktitle.innerHTML='<span>Task List</span>'