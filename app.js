let username = "Pierre" ;
console.log(`Hello ${username}`);

// Array of object 
const people = [
    {"name" : "Pierre" , "age" : 40 } ,
    {"name" : "Thomas" , "age" : 30 } ,
    {"name" : "Patrick" , "age" : 12 } ,
]

people.forEach(person => console.log(`the name is ${person.name}`));


const myNumber = [1 , 2 , 3 , 4 , 5 ,6] ;
const squared = myNumber.map( (num) => num * num );
console.log(squared);
