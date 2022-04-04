const today = new Date();
const birthday = new Date('08-04-1998')
let val;

val = today;
val = birthday;

val = today.getMonth();//month is zero based
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

val = birthday.setMonth(3);
val = birthday;


console.log(val);