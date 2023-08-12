// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    const sum = nums.reduce((total, currentNumber) => {
        return total + currentNumber;
    }, 0);
    return sum
}

const numbers: number[] = [1, 2, 3, 4, 5];
const result = sum(...numbers);

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    if (a === 0 || b === 0 || c === 0) {
        return '00'
    }
    if (a === b && a === c) {
        return '10'
    }
    if ((a === b) || (b === c)) {
        return '01'
    }
    // if(a!==b && a!==c && b!==c) { // else{return "11"}
    //     return '11'
    // }
    return '11'
}

getTriangleType(2, 2, 2)
getTriangleType(2, 2, 3)
getTriangleType(1, 2, 3)
getTriangleType(1, 2, 0)

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let numberArr = number.toString().split('').map(Number);
    let result = sum(...numberArr)
    return result
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const evenArr = arr.filter(number => number % 2 === 0)
    const oddArr = arr.filter(number => number % 2 !== 0)
    const evenSum = sum(...evenArr)
    const oddSum = sum(...oddArr)
    return oddSum >= evenSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    const newArr = array.filter(number => {
        if (Number.isInteger(number) && number > 0) {
            number = number * number
        }
    })
    return newArr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N % 2 !== 0) {
        return (N + 1) * (N / 2)
    } else {
        const x = N / 2
        return (x * (x + 1))
    }
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}

export const Lesson_8 = () => {

    getTriangleType(2, 2, 2)
    getTriangleType(2, 2, 3)
    getTriangleType(1, 2, 3)
    getTriangleType(1, 2, 0)

    console.log(getTriangleType(1, 2, 0))
    return (
        <div>test</div>
    )
}