console.log('Hi, This is kishore'); //This prints the statement inside the console

var myobj = {
    name: 'kishore',
    age: '21'
};
console.info(myobj) //This prints the information given as a message

console.table(['alex', 'july', 'romeo']); //This prints the list in the format of table

console.error('This is an error'); //This give an error message in the console

console.warn('This is a warning'); //This gives a warning

console.time("MyTimer"); //Here the timer starts counting the time to execute the following code
console.timeLog("My Timer", "Starting application up");
console.timeEnd("MyTimer"); //Here the time counts end


for (i = 0; i < 10; i++) {
    console.count();
} //This keeps on counting until the condition does not satisfied


console.clear(); //This clears the whole console