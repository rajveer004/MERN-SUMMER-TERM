const students = [
{ id: 1, name: 'Aman', marks: 85, attendance: 92 },
{ id: 2, name: 'Riya', marks: 38, attendance: 76 },
{ id: 3, name: 'Karan', marks: 67, attendance: 81 },
{ id: 4, name: 'Simran', marks: 91, attendance: 88 },
{ id: 5, name: 'Raj', marks: 45, attendance: 60 },
{ id: 6, name: 'Neha', marks: 29, attendance: 95 }
];
// 1)Use filter() to create a list of students who have passed. Passing marks are 40 or above.
const passedStudents = students.filter((student)=>{ 
    return(student.marks >= 40)
});
console.log("passed students are:",passedStudents);

// 2,3
const gradeStudents = students.map((student)=>({
    
        ...student,
        grade: 
            student.marks>=80?"A":
            student.marks>=60?"B":
            student.marks>=40?"C":"F"
    
}));
console.log("Students having grade:",gradeStudents);

// 4 Use reduce() to calculate the class average marks.
const averageMarks = students.reduce(
    (sum,student)=>
      sum + student.marks,
      0 
)/students.length;
console.log(`average marks = ${averageMarks}`);

//5 Use reduce() to find the topper of the class.
const toper = students.reduce((max,student)=>
    student.marks>max.marks?student:max
).name;
console.log("topper of class = ",toper);
