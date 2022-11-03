function addText(){

    //div
    let x = document.getElementById("text");
    let y = document.getElementById("p1")
    let h1 = document.createElement("h1");
    h1.innerHTML = "Hello World";
    x.appendChild(h1);    

    x.insertBefore(h1,y);

}