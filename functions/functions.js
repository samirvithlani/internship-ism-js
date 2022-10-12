//null
//boilerPlate code 

//signature 
//  function name (params ) 
//function keyword
// type of function UDF  --> w r w a, wo wa r, wo wa w a

//w r wa
function add (a,b){
    
    let aa = () =>{
        return a + b
    }
    return aa();
}

function mul()
{
    let x = 100
    let y =2;
    console.log(x*y);
}
var ans = add(100,200);
console.log(ans);
mul();
//arrow functions

var add1 = (a,b,c) =>{

    return (a + b + c) / 3
}

var ans1 = add1(100,200,300);
console.log(ans1);

