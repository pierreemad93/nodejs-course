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


const ages = [12 , 18 , 22 , 23] ;
const adults = ages.filter( (age) => age >= 18) ;
console.log(adults);




const numbers = [1 , 2 , 3 , 4 , 5 ];
const sum = numbers.reduce( (total , num ) => total + num , 0)
console.log(sum);

