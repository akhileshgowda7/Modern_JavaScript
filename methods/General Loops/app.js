//For Loop when you know how many iterations

for(let i =0;i<10;i++){

if(i===2){
    // console.log("2 is my favourite Number");
    continue;
    
}

// console.log('Number'+i);
}

//While loop when you do not know the iterations

var i =0
while(i<10){
    // console.log('Number'+i);
    i++;
}

//Do While Loop (it is going to run once no matter what )

var i =0;
do{
    //   console.log('Number'+i);
      i++;

}
while(i<10);


//accesing arrays
const cars=['Honda','Kia','Ford','Chevy','Toyota',]

for( let i =0;i<cars.length;i++){
    // console.log(cars[i]);
}

//forEach Loop

cars.forEach(function(current){
// console.log(current);
});

//Map
const users = [{id:1,name:'Akhilesh'},{id:2,name:'gowda'},{id:3,name:'Ramesh'}];

const ids = users.map(function(user){
    return user.id
});
console.log(ids);

//For in Loop
const usr = {
    firstName:'Akhilesh',
    lastname:'Ramesh',
    Age:23,
}

for(let x in usr){
    console.log(`${x}:${usr[x]}`);
}

