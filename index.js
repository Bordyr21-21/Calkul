const a = prompt ('Введите первое число') // -1000 - 1000
const b = prompt('Введите знак') // + - 
const c = prompt('Введите второе число')


const num1 = Number(a);
const num2 = Number(c);

let result;


if (num1 > -1000 && num1 < 1000 || num2 > -1000 && num2 < 1000 ) 
    {
    if (b === '+')
    { 
        result = num1 + num2;
    }

    else if (b === '-') 
    {
        result = num1 - num2
    }
    else 
    { 
        result = 'Неизвестный знак';
    }
}
else 
    {
        console.log('Числа должны быть меньше 1000 и больше -1000')
    }

console.log('Результат' + result); 