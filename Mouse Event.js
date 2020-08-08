const btn=document.querySelector('.clear-task');
btn.addEventListener('dblclick',runEvent);

function runEvent(e){
	console.log(`Event Type: ${e.Type}`)
}
