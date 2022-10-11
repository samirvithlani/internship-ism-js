console.log("log");
console.info("info");
console.error("error");
console.warn("warn");


// var let const
//var is having global scope
//let is having block scope
//const is having block scope and constant value

//ECMA Script 6

var a = 10;
var f = 10.25
var sname = "sachin";
var isActive = true;
var isNull = null;

console.log(typeof(a));
console.log(typeof(f));
console.log(typeof(sname));
console.log(typeof(isActive));
console.log(typeof(isNull));

//operator :
/// operators
//arithmatic operators + - * / %
//relational operators > < >= <= == !=
//logical operators && || !
//bitwise operators & | ^ ~ << >>
//assignment operators = += -= *= /= %=
//ternary operator ?:
//comma operator ,



///decision making statements
//if else
//switch case
//loops

var no1 = 200
var no2 = 200

var temp;
if(no1>no2){

    console.log("no1 is greater than no2");
    temp =no1
}
else if(no1==no2){
    console.log("no1 is equal to no2");
}
else{
    
    
    console.log("no2 is greater than no1");
    temp =no2;
}



temp = no1>no2 ? no1 : no2
//

// == , ===

var aa = "100";
var aaa = 100;


if(aa===aaa){
    console.log("equal");
}
else{
    console.log("not equal");
}


aa === aaa ? console.log("equal") : console.log("not equal");

var age = 1
if(age>=18){
    console.log("eligible for vote");
    if(age>=21){
        console.log("eligible for marrige");
    }
}
else{
    console.log("not eligible for vote");
    if(age>=5){
        console.log("eligible for study");
    }
    else{
        console.log("not eligible for study");
    }
}
//
//logical operators

var no = 12

if(no % 2 ==0 && no % 3 ==0){

    console.log("divisible by 2 and 3");

}
else{
    console.log("not divisible by 2 and 3");
}


              //&& 
//con1       con2          re              
// t         t             t
// f         -             f
// t         t             t

                //||

//t         -       t
//f        t       t
//f        f       f



if(no!=3){

    console.log("not equal to 3");
}
else{
    console.log("equal to 3");
}


var salary = 2000
//salary += 1000
salary = salary + 1000
console.log(salary);
















