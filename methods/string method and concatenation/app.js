const FirstName = 'Akhilesh';
const LastName = 'Ramesh';

let val;

val = FirstName  +  LastName;
//concatenation
val = FirstName + ' ' + LastName;

//append
val = 'Nanjesh ';
val+= 'Gowda';

//escapingg
val = 'Thats awesome, I can\'t wait to see You';

//Length
val = FirstName.length;

//concat

val = FirstName.concat(' ',LastName);

//change case

val = FirstName.toLowerCase();
val = LastName.toLocaleUpperCase();



console.log(val);
