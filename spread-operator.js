const number = [1,2,3];

function sum(x,y,z){
    console.log(x,y,z);
    return x+y+z;
}

const result = sum(...number);
console.log(result);

const obj = {
    name : 'fardin',
    age : 23
}

const obj1 = {...obj};

obj.salary = 20000;

console.log(obj);
console.log(obj1);