var employee =[
    {
        id:1,
        name: "John",
        age: 30,
        salary: 25000,
        isAcive:true
        
    },
    {
        id:2,
        name: "Raj",
        age: 45,
        salary:35450,
        isAcive:true
    },
    {
        id:3,
        name: "Amit",
        age: 22,
        salary: 16000,
        isAcive:false
        
    },
    {
        id:4,
        name: "Parth",
        age: 45,
        salary: 24500,
        isAcive:true
        
    }
]
//employees whose salary is greater than 25000 and age is greater than 25 using filter

//employee[i]
var res = employee.filter((emp)=>{
    return emp.salary>= 25000 && emp.age>=25 && emp.name.startsWith("R")
})


var x = employee.map(e=>{
    return e.name.startsWith("R")
})
console.log(x)
console.log(res)
///function id 45 employees 
//4
function filterData(id){

    let emp = employee.filter((e)=>{
        return e.isAcive
    })
    console.log(emp)

}

filterData(1)



var users = ["amit","ajit","raj","neha","ajay","niraj"]
var xx = users.every((u)=>{
    return u.startsWith("a")
})
var xy = users.some((u)=>{
    return u.startsWith("a")
})
console.log(xx)
console.log(xy)

var res1 = employee.every((e)=>{
    return e.salary>=10000
})
console.log(res1)


var findres = users.find((u)=>{
    return u.startsWith("n")
})
console.log(findres)

users.unshift("suresh")
console.log(users)
users.shift()
console.log(users)






















