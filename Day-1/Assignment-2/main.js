var num1 = 250; //This is a global variable and can be changed anywhere

console.log(num1);

{
    let num1 = 120; //Let is a local variable and it cannot be called outside of its code block
    console.log(num1);
}

console.log(num1);

num1 = 150;
console.log(num1);


const num2 = {
    name: 'kishore',
    age: '21'
}
console.log(num2);

num2 = {
    place: 'chennai'
} //This will throw an error since const cannot be modified