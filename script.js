// Store the current input and result
let input = '';
let result = '';

// Function to append a value to the input field
function appendToInput(value) {
    input += value;
    updateInputField();
}

// Function to update the input field with the current input
function updateInputField() {
    document.getElementById('main-input').value = input;
}

// Function to clear the input and result
function clear() {
    input = '';
    result = '';
    updateInputField();
}

// Function to calculate the result
function calculate() {
    try {
        result = eval(input);
        input = result.toString();
        updateInputField();
    } catch (error) {
        input = 'Error';
        result = '';
        updateInputField();
    }
}

// Event listeners for numeric and operator buttons
function Value1(value) {
    if (value === '=') {
        calculate();
    } else if (value === 'C') {
        clear();
    } else if (value === 'AC') {
        clearAll();
    } else {
        appendToInput(value);
    }
}

// Function to clear everything (AC)
function clearAll() {
    input = '';
    result = '';
    updateInputField();
}
