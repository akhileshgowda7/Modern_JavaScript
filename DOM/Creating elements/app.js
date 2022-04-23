//Create element
const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add Id

li.id = 'new-item';

//Add attribute
li.setAttribute('title','New Item');

//Create Text Node and append
li.appendChild(document.createTextNode('Hello World'))

//Create new link element
const link = document.createElement('a');
//Add classes
link.className = 'delete-item secondary-content';
//Add icon html
link.innerHTML = '<i class="fa fa-remove">'
//Append link into li
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);