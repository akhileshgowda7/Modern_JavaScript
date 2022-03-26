document.querySelector('h1').style.color='red';

//Var,const and let
var name = 'Akhilesh Gowda';
console.log(name);
name = 'Nanjesh';
console.log(name);

//let
let First = 'Akhilesh Gowda';
console.log(First);
First = 'Nanjesh';
console.log(First);

//Const
const Last = 'Akhilesh Gowda';
console.log(Last);
//cannot reassign values
// Last = 'Nanjesh';
// console.log(Last);//will throw an error here

//object literal
const person = {
    First_name:'Akhilesh',
    Age:28
}
person.name='Nanjesh';
console.log(person);

