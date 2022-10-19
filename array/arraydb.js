var users = [
    {
        name:"raj",
        age:15,
    },
    {
        name:"ram",
        age:16,
    },
    {
        name:"ravi",
        age:25,
    },{
        name:"harsh",
        age:45
    }
]

var x = users.filter((u)=>{

    //raj false
    //ravi true
    return u.age>=25;
})