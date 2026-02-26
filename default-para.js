function add(num1,num2=0){
    const total = num1 + num2;
    console.log(num1,num2,total);
}
//if one value are missing the by default parameter is num2=0
add(10,20);

function fullName(first,last='Rahman'){
    const fullName = first + ' ' + last;
    console.log(fullName);
}

fullName("Sakibur");

//default parameter
/**
 * string -> " "
 * number -> 0 (for ADD)
 * array -> []
 * object -> {}
 */