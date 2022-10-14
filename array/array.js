var lanaguages = ["C", "C++", "PHP", "Java", "C#","c++", "Python","A","Malayalam","Bob"];
var number = [12,25,1,1258,896,98,5,154,8]
console.log(lanaguages);
//length
var len = lanaguages.length;
console.log(len);
//sort
function sortArrayByLen(a,b){
    
    return a.length - b.length;
    
}
//lanaguages.sort(sortArrayByLen);
//lanaguages.sort((a,b)=>a.length - b.length);
// lanaguages.sort((a,b)=>{
//     return a.length - b.length;
// })
console.log(lanaguages);
number.sort((a,b)=>a-b);
console.log(number);

//reverse
//lanaguages.reverse();
console.log(lanaguages);
//map
// lanaguages.map((x)=>{
//     console.log(x.toUpperCase());
// })
// //forEach
// lanaguages.forEach((x)=>{
//     console.log(x.toUpperCase());
// })


var x = lanaguages.push("Javascript");
console.log(x);
console.log(lanaguages);

var y = lanaguages.pop();
console.log("removing",y);
console.log(lanaguages);

//lanaguages.splice(1,3,100,200,300);
lanaguages.splice(1,0,"Ruby");
console.log(lanaguages);


var i1 = lanaguages.indexOf("C++");
console.log(i1);

console.log(lanaguages.lastIndexOf("c++"))
console.log(lanaguages.includes("Java"))

var updateLanguages =  ["Go","Rust","Swift"];
lanaguages = lanaguages.concat(updateLanguages);
console.log(lanaguages);

function isEven(x){

    return  x % 2 == 0;
}

var evenarray   = number.filter(isEven);
console.log(evenarray);

var name= "samir"

//
function isStartsWith(x){

    return x.startsWith('P') && x.endsWith('P');
}

//var res = lanaguages.filter(isStartsWith);
var res = lanaguages.filter((x)=>{
    return x.startsWith("P") || x.startsWith("C")
})
console.log(res);

var employee = [
    {
        name:"samir",
        age:25,
    },
    {
        name:"suresh",
        age:26,
    },{
        name:"raj",
        age:25

    }
]

employee = employee.filter((x)=>{
    return x.age == 25;
})
console.log(employee);



