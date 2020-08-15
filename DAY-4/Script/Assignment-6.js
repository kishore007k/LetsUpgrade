var number = Number(window.prompt('Enter a number: '));

while (true) {
    if (number == 100) {
        console.log('Congrats You have entered the correct number');
        break
    } else {
        var number = Number(window.prompt('Enter a number: '))
        continue
    }
}