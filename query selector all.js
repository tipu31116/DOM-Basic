const item = document.querySelectorAll('ul li');
console.log(item)
item.forEach(function(items){
	items.style.color='red'
	items.textContent='Hello'
})