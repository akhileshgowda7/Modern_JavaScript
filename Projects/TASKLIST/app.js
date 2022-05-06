// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
    //add task event
    form.addEventListener('submit',addTask);
    //remove task event
    taskList.addEventListener('click',removeTask);
    //clear tasks events
    clearBtn.addEventListener('click',clearTask);
    //filter tasks event
    filter.addEventListener('keyup',filterTask);

}

//Add Task
function addTask(e){
    if(taskInput.value==='')
    {
        alert('Add a task');

    }
        const li = document.createElement('li');
        //Add class
        li.className = 'collection-item';
        //create test node and append li
        li.appendChild(document.createTextNode(taskInput.value));

        //create new link element
        const link = document.createElement('a');
        
        //Add Class to new link
        link.className = 'delete-item material-icons secondary-content'; 
        // in materialize we neeed to have the secondary content class if we need to have something to the write
        //Add icon element
        link.innerHTML = '<i class="material-icons ">cancel</i>';
        
        //append the link to li
        li.appendChild(link);
        console.log(li);

        //append li to ul
        taskList.appendChild(li);
        console.log(taskList);


        //clear input
        taskInput.value = '';

    e.preventDefault();
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Sure')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

//clearTasks
function clearTask(e){
    // taskList.innerHTML='';
    //remove child is faster than inerhtml
    //faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

}

//filterTask
function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        console.log(e.target);
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text)!=-1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}