var sales = Number(window.prompt("Enter the sales value: "));

if (sales >= 0 && sales <= 5000) {
    let commission = sales * 0.02;
    console.log(`The total commission is ${commission}`);
} else if (sales >= 5001 && sales <= 10000) {
    let commission = sales * 0.05;
    console.log(`The total commission is ${commission}`);
} else if (sales <= 10001 && sales <= 20000) {
    let commission = sales * 0.07;
    console.log(`The total commission is ${commission}`);
} else if (sales >= 20000) {
    let commission = sales * 0.1;
    console.log(`The total commission is ${commission}`);
} else if (sales == undefined) {
    console.log('Please enter a value');
} else {
    console.log("Invalid Input")
};