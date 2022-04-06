person = {
    firstName:'Akhilesh',
    lastName:'Ramesh',
    age:23,
    hobbies:['Music','Soccer'],
    address:{city:'Bloomington',state:'Indiana'},
    getBirthYear:function(){
        return 1998 - this.age;
    }

}
let val;

val=person;
//get sepecific value

val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.address;
val = person.getBirthYear();
console.log(val);