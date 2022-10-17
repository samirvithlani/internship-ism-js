function demo(){

    document.getElementById("text").innerHTML="Hello World";
    document.getElementById("text").style.color="red";
    document.getElementById("google").innerText="Facebook";
    document.getElementById("google").href ="https:www.facebook.com";
    console.log("demo function")
    document.getElementsByTagName("h1")[1].innerHTML="red";
    document.getElementsByClassName("header")[1].style.color="red";
    //even red / odd blue
}

function key(){

    var x = document.getElementById("name").value
    console.log(x)

}