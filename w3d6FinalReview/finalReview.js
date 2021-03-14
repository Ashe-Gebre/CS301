let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b)

let arr1 = [1,2,3];
console.log(arr1);
swap2(arr1, 0, 2);
console.log(arr1);

function swap1(a,b){  //swapping primitives (which are values)
    console.log(a, b);
    let temp = a;
    a=b;
    b=temp;
    console.log(a, b);
}

function swap2(arr2, i, j){//swapping object properties
    let temp = arr2[i];
    arr2[i]= arr2[j];
    arr2[j]= temp;
}