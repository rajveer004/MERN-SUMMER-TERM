const students =
[
    {
        name: "Ritu Raj",
        totalMarks: 85,
        age: 22,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 12345,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Mradul",
        age: 19,
        totalMarks: 90,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 5678,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Harsh",
        age: 20,
        totalMarks: 88,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 78910,
        hobbies: ["Reading", "Traveling", "Cooking"],
    },
    {
        name: "Anandi",
        age: 19,
        totalMarks: 92,
        city: "Delhi",
        isGraduated: true,
        registrationNumber: 7789,
        hobbies: ["Reading", "Traveling", "Cooking"],
    }
];

/* var newArray=[];
for(let i=0;i<students.length;i++){
    const p=students[i].totalMarks/150*100;
    newArray.push({
        name: students[i].name,
        totalMarks: students[i].totalMarks,
        age: students[i].age,
        city: students[i].city,
        isGraduated: students[i].isGraduated,
        registrationNumber: students[i].registrationNumber,
        hobbies: students[i].hobbies,
        percentage: p.toFixed(2) // Limiting percentage to 2 decimal places
    });
} */

//console.log("Students using for loop:", newArray);

// const updatedStudents = students.map(s => {
//         const p=s.totalMarks/150*100;
//         s.percentage=p.toFixed(2).toString()+"%"; // Limiting percentage to 2 decimal places and converting to string
//         return s;
// });
const updatedStudents = students.map(s => {
        const p=s.totalMarks/150*100;
       // s.percentage=p.toFixed(2).toString()+"%"; // Limiting percentage to 2 decimal places and converting to string- It was updating original value as same reference was being used.
       return {
        ...s,
        percentage:p.toFixed(2).toString()+"%" 
       }
});

console.log("Original Students:", students);
console.log("Updated Students with Percentage:", updatedStudents);

//Filter Function In JS: 

const studentsAbove85 = students.filter(student => student.totalMarks > 85);

console.log("Students with Total Marks above 85:", studentsAbove85);

    //console.log(students);

/* const arr=[2,3,4,5,6];

const doubledArr= arr.map(num => {
    return num*num;
});

console.log("Original Array:", arr);
console.log("Doubled Array:", doubledArr); */

// map, filter, reduce, function of objects, destructuring, spread operator, rest operator, classes, inheritance, encapsulation, polymorphism, abstraction, modules, promises, async/await, error handling, callbacks, event loop, closures, hoisting, scope, this keyword, prototype chain, ES6 features (let, const, arrow functions, template literals), DOM manipulation, AJAX, JSON parsing/stringifying.