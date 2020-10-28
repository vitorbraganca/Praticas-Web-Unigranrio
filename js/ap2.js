const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");
const exercise3 = document.getElementById("exercise3");
const exercise4 = document.getElementById("exercise4");
const exercise5 = document.getElementById("exercise5");
const exercise6 = document.getElementById("exercise6");
const exercise7 = document.getElementById("exercise7");
const exercise8 = document.getElementById("exercise8");
const exercise9 = document.getElementById("exercise9");
const exercise10 = document.getElementById("exercise10");
const exercise11 = document.getElementById("exercise11");

const button = document.getElementById("inputNumberButton");
const button8 = document.getElementById("inputNumberButton8");


function remove_all() {
    exercise1.classList.add('exercise');
    exercise1.classList.remove('active');
    exercise2.classList.add('exercise');
    exercise2.classList.remove('active');
    exercise3.classList.add('exercise');
    exercise3.classList.remove('active');
    exercise4.classList.add('exercise');
    exercise4.classList.remove('active');
    exercise5.classList.add('exercise');
    exercise5.classList.remove('active');
    exercise6.classList.add('exercise');
    exercise6.classList.remove('active');
    exercise7.classList.add('exercise');
    exercise7.classList.remove('active');
    exercise8.classList.add('exercise');
    exercise8.classList.remove('active');
    exercise9.classList.add('exercise');
    exercise9.classList.remove('active');
    exercise10.classList.add('exercise');
    exercise10.classList.remove('active');
    exercise11.classList.add('exercise');
    exercise11.classList.remove('active');
}


function call_exercise1() {
    remove_all();
    exercise1.classList.toggle('exercise');
    exercise1.classList.toggle('active');

}

function call_exercise2() {
    remove_all();
    exercise2.classList.toggle('exercise');
    exercise2.classList.toggle('active');
}

function call_exercise3() {
    remove_all();
    exercise3.classList.toggle('exercise');
    exercise3.classList.toggle('active');
}

function call_exercise4() {
    remove_all();
    exercise4.classList.toggle('exercise');
    exercise4.classList.toggle('active');
}

function call_exercise5() {
    remove_all();
    exercise5.classList.toggle('exercise');
    exercise5.classList.toggle('active');
}

function call_exercise6() {
    remove_all();
    exercise6.classList.toggle('exercise');
    exercise6.classList.toggle('active');
}

function call_exercise7() {
    remove_all();
    exercise7.classList.toggle('exercise');
    exercise7.classList.toggle('active');
}

function call_exercise8() {
    remove_all();
    exercise8.classList.toggle('exercise');
    exercise8.classList.toggle('active');

    button8.classList.remove('exercise')
    button8.classList.add('active');
}

function call_exercise9() {
    remove_all();
    exercise9.classList.toggle('exercise');
    exercise9.classList.toggle('active');

    button.classList.remove('exercise')
    button.classList.add('active');

}

function call_exercise10() {
    remove_all();
    exercise10.classList.toggle('exercise');
    exercise10.classList.toggle('active');
}

function call_exercise11() {
    remove_all();
    exercise11.classList.toggle('exercise');
    exercise11.classList.toggle('active');
}

function exercise_1() {
//    Programa que recebe 3 numeros, faz a média e mostra o resultado!

        const result = document.getElementById("result");

        let text_number1 = document.getElementById("number1");
        let text_number2 = document.getElementById("number2");
        let text_number3 = document.getElementById("number3");

        let number1 = Number(text_number1.value);
        let number2 = Number(text_number2.value);
        let number3 = Number(text_number3.value);

        let average = (number1 + number2 + number3) / 3;

        result.innerText = average;

}

function exercise_2() {


        // Programa que calcula o aumento do salário.

        const result = document.getElementById("result2");

        let text_salary = document.getElementById("salary");
        let salary = Number(text_salary.value);

        const raise = salary + salary * 0.1;

        result.innerText = "R$" + raise;

}

function exercise_3() {
//    Programa que le dois valores inteiros, caso sejam iguais, são somados, caso
//    contrário, são multiplicados.

    const result = document.getElementById("result3");

    let text_valueA = document.getElementById("valueA");
    let text_valueB = document.getElementById("valueB");

    let valueA = Number(text_valueA.value);
    let valueB = Number(text_valueB.value);
    let valueC;

    if (valueA === valueB) {
        valueC = valueA + valueB;
    } else {
        valueC = valueA * valueB;
    }

    result.innerText = valueC;

}

function exercise_4() {
//    Programa que calcula valor referente a pagamento parcelado.

    const result = document.getElementById("result4");

    let text_fullPrice = document.getElementById("fullPrice");
    let text_options = document.getElementById("installment");

    let value_option = Number(text_options.value);
    let value_fullPrice = Number(text_fullPrice.value);



    if (value_option === 3) {
        value_fullPrice = value_fullPrice + value_fullPrice * 0.1;
    } else if (value_option === 5) {
        value_fullPrice = value_fullPrice + value_fullPrice * 0.2
    } else {
        value_fullPrice = "Tente novamente."
    }

    result.innerText = value_fullPrice;

}

function exercise_5() {
    //    Programa que recebe 3 notas, faz a média e mostra o resultado!

    const result_average = document.getElementById("result_average");
    const result = document.getElementById("result5");

    let text_number1 = document.getElementById("grade1");
    let text_number2 = document.getElementById("grade2");
    let text_number3 = document.getElementById("grade3");

    let number1 = Number(text_number1.value);
    let number2 = Number(text_number2.value);
    let number3 = Number(text_number3.value);

    let average = (number1 + number2 + number3) / 3;

    if (average >= 8) {
        result.innerText = "Aprovado!"
    } else {
        result.innerText = "Reprovado!"
    }

    result_average.innerText = average;

}

function exercise_6() {
    //    Programa que calcula valor dependendo do código escolhido.

    const result = document.getElementById("result6");

    let text_number1 = document.getElementById("firstNumber");
    let text_number2 = document.getElementById("secondNumber");
    let text_options = document.getElementById("identifier");

    let value_option = Number(text_options.value);
    let firstNumber = Number(text_number1.value);
    let secondNumber = Number(text_number2.value);

    let newValue;

    if (value_option === 1) {
        newValue= firstNumber + secondNumber;
    } else if (value_option === 2) {
        newValue = firstNumber * secondNumber;
    } else if (value_option === 3) {
        newValue = firstNumber / secondNumber;
    }

    result.innerText = newValue

}

function exercise_7() {
//    NÃO HAVIA ENUNCIADO.
}

function exercise_8() {
//   Leia 20 valores reais e calcule seu somatório utilizando a instrução do.. while.


    const result8 = document.getElementById('result8');

    result8.innerText = 'Resultado: '

    button.classList.add('exercise')
    button.classList.remove('active');

    let list_numbers = [];

    let x = 0;

    do {
        x++
        let number = prompt('Numero ' + x + ':');

        list_numbers.push(Number(number));

        console.log(x)

    } while (x < 3);

    let result = 0;

    function sum_number(item) {
        Number(result += item)
        console.log(result);
        return result
    }

    list_numbers.forEach(sum_number)

    console.log('Resultado = ' + result)

    result8.innerText += ' ' + result;

}

function exercise_9() {
//   Leia 20 valores reais e calcule seu somatório utilizando a instrução while.


    result9 = document.getElementById('result9');

    result9.innerText = 'Resultado: '

    button.classList.add('exercise')
    button.classList.remove('active');

    let list_numbers = [];

    let i = 0;

    while (i < 3) {
        i++
        let number = prompt('Numero ' + i + ':');

        list_numbers.push(Number(number));

        console.log(i)
    }

    let result = 0;

    function sum_number(item) {
        Number(result += item)
        console.log(result);
        return result
    }

    list_numbers.forEach(sum_number)

    console.log('Resultado = ' + result)

    result9.innerText += ' ' + result;

}

function exercise_10() {
//    Programa de cadastro de produtos usando estrutura de repetição.

    const result = document.getElementById("result10");

    let text_code = document.getElementById("productCode");

    let product_code = Number(text_code.value);

    let code_list = [];

    let finalPrice;


        code_list.push(product_code);

    function add_Price(item) {
        switch (item) {
            case 100:
                finalPrice += 1.7;
            case 101:
                finalPrice += 2.3;
            case 102:
                finalPrice += 2.6;
            case 103:
                finalPrice += 2.4;
            case 104:
                finalPrice += 2.5;
            case 105:
                finalPrice += 1;
            default:
                finalPrice += 0;
        }
        return finalPrice;
    }

    code_list.forEach(add_Price);

}

function exercise_11() {
// Programa que exibe o quadrado de cada um dos números pares entre 1 e 100.

    const result = document.getElementById("result11");
    result.innerHTML = '';
    // result.style.textAlign = "justify";

    let evens = [];
    let i = 0;
    let text;


    function print_evens(item) {
        result.innerHTML += item + ' | ';
    }

    while (i < 100) {
        i++;
        console.log(i)
        if (i % 2 === 0) {
            console.log(i, 'é par.')
            evens.push(i * i)
        } else {
        //    pass
        }
    }

    evens.forEach(print_evens)


}