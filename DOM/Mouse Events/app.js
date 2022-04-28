const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //click
// clearBtn.addEventListener('click',runEvent);
// //Double click
// clearBtn.addEventListener('dblclick',runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown',runEvent);
//MouseUp
// clearBtn.addEventListener('mouseup',runEvent);
//Mouseenter
// card.addEventListener('mouseenter',runEvent);
//Mouse Leave
// card.addEventListener('mouseleave',runEvent);
// Mouseover
// card.addEventListener('mouseover',runEvent);
// // Mouseout
// card.addEventListener('mouseout',runEvent);
//Mousemove
card.addEventListener('mousemove',runEvent);


//event handler
function runEvent(e){
    e.preventDefault();
    console.log(`EVENT TYPE:${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`;
}