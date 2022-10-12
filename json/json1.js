//JSON javascript object notation

//


var employee = {

    name:"John Smith",
    salary : 12535.25,
    isActive: true
}
console.log(employee);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.isActive);

var student = {

    id:101,
    "name":"raj",
    age:25,
    course :{
        id:1,
        name:"java",
        fees:25000,
        duration:6
    }
}

console.log(student.name, " -", student.course.name);

var students = [
    {
        id:101,
        "name":"rajvi",
        age:25,
        courses :[
            {
                id:1,
                name:"java",
                fees:25000,
            },{
                id:2,
                name:"python",
                fees:15000,
            }
        ]

    },{
        id:102,
        "name":"ram",
        age:25,
        courses :[
            {
                id:1,
                name:".net",
                fees:35000,
            },{
                id:2,
                name:"python",
                fees:15000,
            }
        ]
    },{
        id:103,
        "name":"ravi",
        age:25,
        courses :[
            {
                id:1,
                name:"Node",
                fees:45000,
            },{
                id:2,
                name:"React",
                fees:78500,
            }
        ]
    }
]


for(let i=0;i<students.length;i++){
    console.log(students[i].name);
    for(let j =0;j<students[i].courses.length;j++){
        console.log(students[i].courses[j].name);
    }
}









