// This is assignment-2

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "two player dice game using JavaScript"
    }
}


const {
    name,
    age,
    projects: {
        diceGame
    }
} = student;

console.log(name, age, diceGame);