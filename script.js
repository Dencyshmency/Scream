let a = '';
let b = '';
let sing = ''
let finish = false;

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '.'];
let sings = ['/', '*', '%', '^', '-', '+', 'AC', '='];

let result = document.querySelector('.result');
let summa = document.querySelector('.rovno');

let deleteSymbols = document.querySelector('.back');

deleteSymbols.addEventListener('click', () => {
    if(a !== '') {
        result.textContent = a.slice(0, -1);
    }
})

function results(key) {
    switch(key) {
        case '+':
            a = (+a) + (+b);
            break;
        case '-':
            a = (+a) - (+b);
            break;
        case '*':
            a = (+a) * (+b);
            break;
        case '/':
            a = (+a) / (+b);
            break;
    }

   
    return a
}

summa.addEventListener('click', () => {
    if(finish = true) {
        let otv = results(sing)
        b = '';
        sing = '';
        result.textContent = otv
        console.log('a', a, 'sing', sing, 'b', b) 
        if(otv > 0 && otv < 1) {
            result.textContent = otv.toFixed(1)
        }   
    }
    
})

// Кнопка очистить экран (удалить содержимое)
const clearPanel = document.querySelector('.clear')
clearPanel.addEventListener('click', () => {
    result.textContent = '';
    a = '';
    b = '';
    sing = '';
})

//Нажатие кнопок, отображение результата
const buttons = document.querySelectorAll('.btn_js');
buttons.forEach((item) => {
    item.addEventListener('click', (event) => {
       let key = event.target.textContent;
       console.log(event)
            if(sing !=='' && b !== '' && a !=='') {
                finish = true;
            }
            if (numbers.includes(key)) {
            result.textContent += key;
            if (b === '' && sing === '') {
                a += key
                console.log('a', a, 'sing', sing, 'b', b)
            }
            if (a !=='' && sing !== '') {
                b += key
                result.textContent = b
                console.log('a', a, 'sing', sing, 'b', b)
            }

            } 
            if (sings.includes(key)) {
                let otv = results(sing)
                    b = '';
                    sing = key;
                    result.textContent = key;
                    console.log('a', a, 'sing', sing, 'b', b)
            }
    })
})