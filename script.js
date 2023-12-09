function calculate(operation) {
    var number1 = parseFloat(document.getElementById('textbox1').value);
    var number2 = parseFloat(document.getElementById('textbox2').value);
    var resultField = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultField.innerText = "ERROR! Invalid input";
        return;
    }

    switch (operation) {
        case 'add':
            resultField.innerText = number1 + number2;
            break;
        case 'subtract':
            resultField.innerText = number1 - number2;
            break;
        case 'multiply':
            resultField.innerText = number1 * number2;
            break;
        case 'divide':
            if (number2 !== 0) {
                resultField.innerText = number1 / number2;
            } else {
                resultField.innerText = "ERROR! Cannot divide by zero";
            }
            break;
        default:
            resultField.innerText = "ERROR! Invalid operation";
    }
}
