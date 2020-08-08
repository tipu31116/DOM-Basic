// document.querySelector('.clear-tasks').addEventListener('click',function(e){
// 	console.log('clicked');
// 	e.preventDefault()
// })



document.querySelector('.clear-tasks').addEventListener('click',onClick);
function onClick(e){
	let val;
	val=e;
	val=e.target;
	val=e.target.id
	val=e.target.className
	e.target.textContent='hello'
	console.log(val)
	e.preventDefault()

}