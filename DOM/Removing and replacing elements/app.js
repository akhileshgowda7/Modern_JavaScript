//replace element

//create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading,oldHeading);

//RemovevElement
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

//remove child element
list.removeChild(lis[3]);

//classes & attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.classLists;
val = link.className;
val = link.classList[0];
link.classList.add('test');
val = link;
link.classList.remove('test');

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com');
link.setAttribute('title','Google');
val = link.hasAttribute('title');
link.remove('title');

console.log(val)