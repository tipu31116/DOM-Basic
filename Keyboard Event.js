const form=document.querySelector('#task-form')
const inputTask=document.querySelector('#task')
form.addEventListener('submit', runEvent);
function runEvent(e){

    
    console.log(`Event Type : ${e.type}`)
    console.log(inputTask.value)
	e.preventDefault();
}