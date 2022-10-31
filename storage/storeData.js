
var employee = {
    name:"raj",
    age:23,
    salary:10000

}
function login(){
    localStorage.setItem("username","raj")
    //localStorage.setItem("username","rajvi")
    var stremployee =  JSON.stringify(employee)
    localStorage.setItem("employee",stremployee)
    sessionStorage.setItem("username","parth")

}

function getStorageData(){

    let username = localStorage.getItem("username")
    let username1 = sessionStorage.getItem("username")
    let emp = localStorage.getItem("employee")
    let empobj = JSON.parse(emp)
    console.log(empobj.name)
    //validate
    //login...
    document.getElementById("print").innerHTML = username
    document.getElementById("print1").innerHTML = username1

}

function clearStorage(){

    //localStorage.removeItem("username")
    localStorage.clear()
    sessionStorage.clear()
}