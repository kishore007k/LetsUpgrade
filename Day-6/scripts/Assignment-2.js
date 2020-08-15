let num = window.prompt('Enter a number: ');

function table() {
    let h3 = document.getElementById('table');
    for (let i = 0; i < 11; i++) {
        let number = [`${num} X ${i} = ${num*i}`]
        console.log(number)
        number.forEach(numbers => {
            h3.innerHTML += `<li>${numbers}</li>`;
        })
    }
}

table()