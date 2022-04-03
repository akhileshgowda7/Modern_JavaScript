const Name = 'Akhilesh';
const age = 23;
const job = 'Web developer';
const city = 'Bloomington';
let html;
//without template strings es5
html = '<ul><li>Name:'+ Name +'</li><li> age:' + age + '</li><li>job:'+ job +'</li><li>city:'+ city +'</li></ul>';

//with template strings
html = ` 
    <ul>
    <li>Name:${Name}</li>
    <li>Name:${age}</li>
    <li>Name:${job}</li>
    <li>Name:${city}</li>
    </ul>`;

document.body.innerHTML = html;
