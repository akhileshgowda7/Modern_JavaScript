//create some arrays
const numbers = [1,2,3,4,1,4,5,8,9];
const numbers1 = new Array(22,33,45,67,32,25,67);
const fruits = ['Apple', 'Banana','Mango','Papaya','Pineaple'];
const mixed = ['Apple', 1,true,{a:1,b:2},new Date()];

// console.log(mixed);

let val;

// console.log(numbers);
//array length
val=numbers.length
//val is an array
val = Array.isArray(numbers);
//get single value
val = numbers[4];

//insert into array
numbers[2]= 100;
//find index value
val = numbers.indexOf(9);

//mutating arrays
numbers.push(34);
//add on front
numbers.unshift(3);
//take off drom end
numbers.pop();
//take off from front
numbers.shift();
//splice values
numbers.splice(1,1);

//sorting
numbers.sort();
//use the compare function
val = numbers.sort(function(x,y){
return x-y;
});

//reverse sort
val = numbers.sort(function(x,y){
    return y-x;
    });

//Find
function under50(num){
    return num<50;
}
val = numbers.find(under50);





console.log(val);
console.log(numbers);

