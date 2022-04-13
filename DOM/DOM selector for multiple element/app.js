//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[3]);

// items[0].style.color = 'red';
// items[4].textContent = 'Hey';


// const Listitems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(Listitems);

//document.getElementsByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[3]);

// lis[0].style.color = 'red';
// lis[4].textContent = 'Hey';

// //convert HTML collection into array
// lis = Array.from(lis);

// lis.forEach(function(li,index) {
//   console.log(li.className);
//   li.textContent = `${index}:Hello`;  
// });

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function(item,index) {
      
      item.textContent = `${index}:Hello`;  
    });