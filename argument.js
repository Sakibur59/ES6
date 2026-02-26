function add ( num1,num2) {
    console.log("arguments:",arguments);
    const arg = [...arguments]
    console.log(arg);
    return num1+num2;
}

add(12,2,34,56,67)