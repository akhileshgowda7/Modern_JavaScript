// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click',onClick
);

function onClick(e){
    // console.log('clicked');
    let val;
    val = e;
    //event target
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    //event type
    val = e.type;


    //TimeStamp
    val = e.timeStamp;

    //coordinates relative to window
    val = e.clientY;
    val = e.clientX;

    //coordinates relative to element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);
}