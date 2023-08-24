// Lexical Environment | замікание / рекурсия

//{} -> null
//globalLE {startEngine: Function} -> null
let car = "bmw" //{startEngine: Func, car:"bmv"} -> null
var car2 = "toyota"// var на момент статрта кода в файле уже записано в LE но созначением undefined
console.log(car)

//такой тип функций подлежит всплітию тоесть она будет лежать в лексическом окружении а значит ее можно візвать в єтом файле до ее обявлениня так как она уже  влексическом окружениии
function startEngine() {//внутренне лексическое окружение формируеться в момент візова функции и послее отработки оно удаляется
    //[[Enviroment]] ->  globalLE
    //startEngineLE{} ->  globalLE
    const car = "toyota" //startEngineLE{car: "toyota"} ->  globalLE  (car запишиться в сво
    console.log(`Star ${car}`)
}

const bar = function () {
}
const foo = () => {
}

car = "audi" //{startEngine: Func, car:"audi"} -> null
startEngine()

//любой блок {} создает в нутри себя LE но формируется оно только после візова функци

const counterCreator = () => {
    let count = 0;
    const foo = () => {

        console.log(+count);
    }
    return foo;
}
const counter1 = counterCreator()

counter1();
counter1();
counter1();


let count = 0
const foo1 = () => {
    ++count
    console.log(count)
    foo1()
}
foo1()