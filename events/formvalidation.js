document.getElementById("userform").addEventListener("submit",(event)=>{

    event.preventDefault();
    console.log("Form Submitted");
    let name = document.getElementById("username").value
    if(name.length<4){
        document.getElementById("nameerror").innerHTML="Name must be atleast 4 characters long"

    }

})

document.getElementById("username").addEventListener("blur",()=>{

    let name = document.getElementById("username").value
    if(name.length<4){
        document.getElementById("nameerror").innerHTML="Name must be atleast 4 characters long"

    }

})

document.getElementById("username").addEventListener("focusout",()=>{

    document.getElementById("username").style.backgroundColor="red"
})