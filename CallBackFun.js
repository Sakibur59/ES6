let display=(c)=>{
    console.log(c);
}

let HigherOrderFun=(name,age,CallbackFun)=>{
    const details=`My name is ${name}.I am ${age} years old.`
    CallbackFun(details);
}

HigherOrderFun("Fardin",23,display);