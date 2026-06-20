const student = 
[
{
    name: "Ritu Raj",
    age: 22,
    city : "Delhi",
    isGraduated : true,
    regNumber : 12345,
    hobbies : ["reading","Travelling","Cooking"],
},
{
    name: "Rahul",
    age: 21,
    city : "Jaipur",
    isGraduated : false,
    regNumber : 12543,
    hobbies : ["reading","Cooking"],
}
]

// console.log(student.regNumber);
// console.log(student.hobbies[1]);
console.log(student);

//arrays
 const array = [1,2,3,4];
 const doubledArr = array.map((num)=>{
    return num*2;
 });
 console.log("original array: ",array);
 console.log("doubled array: " ,doubledArr);