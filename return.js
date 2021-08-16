const add = function(number1, number2){
    const sum = number1 + number2;
    if(sum >100){
        return "true";
    }
    return "false";
};

const result = add(7, 5);
console.log(result);

const people = function(number1){
    const people = number1;
    if(people <100 && age >= 18 ){ //Maximum aantal mensen in de club
        return "come in";
    }
    if(people >100){ //Maximum aantal mensen in de club
        return "it's to busy now, come back later";
    }
    if(people >=! 18){ //Leeftijd controle
        return "this club is for adults";
    }
};

const age = 18
const result2 = people(121); //De hoeveelheid mensen in de club
console.log(result2);

const averageArray = function(numbers){
    const average = numbers.map(n => n / 3);
    return average;
}

const result3 = averageArray([80 + 40 + 112]);
console.log(Math.round(result3))

