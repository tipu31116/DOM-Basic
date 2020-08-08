let val;
//get parent to children element
const list=document.querySelector('ul.collection')
val=list.children[3].children[0]
console.log(val)

//get children to partent element
let value
const listItem=document.querySelector('li.collection-item')
value=listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
console.log(value)