const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            display.value = ''; // Clear display
        } else if (value === '=') {
            try {
                display.value = eval(display.value); // Evaluate the expression
            } catch {
                display.value = 'Error'; // Handle error
            }
        } else {
            display.value += value; // Append button value to display
        }
    });
});
