var answer = document.getElementById('answer');

function Add(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var Addition = number1 + number2;
    console.log('Addition = ' + Addition)
    // alert(Addition);
    answer.innerHTML = Addition;
}

function Subtract(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var Sub = number1 - number2;
    console.log('Subtraction = ' + Sub)
    // alert(Sub);
    answer.innerHTML = Sub;
}

function Multiply(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var Multiply = number1 * number2;
    console.log('Multiplication = ' + Multiply)
    // alert(Multiply);
    answer.innerHTML = Multiply;
}

function Modulus(){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var mod = number1 % number2
    console.log('Modulus = ' + mod)
    // alert(mod)
    answer.innerHTML = mod;

}

function Divide(){
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var divide = number1 / number2
    console.log('Division = ' + divide)
    // alert(divide)
    answer.innerHTML = divide;
}

function Answer(){
    var final_answer = parseFloat(document.getElementById('answer').innerHTML);
    number1.value = final_answer;
    number2.value = '';
    answer.innerHTML ='';
}