const li=document.createElement('li')
//add class
li.className='collection-item'


//add attribute

li.textContent='Hello';



//append li as a child to ul
document.querySelector('ul.collection').appendChild(li);
//create new link createElement
const link =document.createElement('a')

//add class
link.className='delete-item secondary-content'
//add icon html
link.innHTML='<i class="fa fa-remove"></i>'
//append link into li
li.appendChild('link')





//2nd element create 
// const li2=document.createElement('li')
// li2.className='collection-item'
// li2.textContent='Tipu'
// document.querySelector('ul.collection').appendChild(li2)
// const link2=document.createElement('a')
// link2.innHTML='<i class="fa fa-remove"></i>'
// li2.appendChild('link2')