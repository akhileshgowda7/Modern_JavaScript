const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//clear input
taskInput.value = '';

// form.addEventListener('submit',runEvent);
// keydown
// taskInput.addEventListener('keydown',runEvent);
//keyup
// taskInput.addEventListener('keyup',runEvent);
//keypress
// taskInput.addEventListener('keypress',runEvent);
//focus
// taskInput.addEventListener('focus',runEvent);
//blur its is the opposite of focus
// taskInput.addEventListener('blur',runEvent);
//cut
// taskInput.addEventListener('cut',runEvent);
//paste
// taskInput.addEventListener('paste',runEvent);
//input
// taskInput.addEventListener('input',runEvent);






function runEvent(e){
    
    console.log(`EVENT TYPE:${e.type}`);
    // console.log(e.target.value);
    // heading.innerText = e.target.value;
    // e.preventDefault();
    // console.log(taskInput.value);
}