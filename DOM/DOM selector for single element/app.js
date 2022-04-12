//document.getElementByIDd()
console.log(document.getElementById('task-title'));

//get things from element 
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//changing style
document.getElementById('task-title').style.background ='#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

//change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Task';
document.getElementById('task-title').innerText = 'My Task';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

const taskTitle = document.getElementById('task-title');


//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // if there is more than one h5 it targets the first one

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#333'; //ONLY CHANGES THE FIRST ODD AS IT IS THE SINGLE QUERY SELECTOR














