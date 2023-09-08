//event loop  собітийній цикл крутиться в браузере нужен для асинхронніх операция
//event loop он нужен чтоб из очередей брать микротаски анимации и макротаски
//на собесе вспоминать тольтко об очереди микро и макро тасок и можно немного вспомнить об очереди animation
//Синхронні код віполняется первім   Потом Микротаски

//єто стек  Стек єтострукра данніх. последний пришел последний вішел lifo
//стек фрейм єто каждій кусочек стека
// const a  =()=>{}
// const b  =()=>{
//     a()
// }
// const c  =()=>{
//     b()
// }

// структура данніх  первій пришел первій вишел fifo

//какая будет последовательность візова
// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// },0)
// console.log(3)


//call steck и очередь предоставляются
//микротаски єто Promis
//макро таски єто

//---------------------------------
// eventloop

// const a = () => {}

// const b = () => {
// 	a()
// }

// const c = () => {
// 	b()
// }

// c()

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

// --------------------

// function a() {
//   console.log("1");
// }
// function b() {
//   console.log("2");
// }
// function c() {
//   console.log("3");
// }

// a();

// new Promise(function (res, rej) {
//   console.log("4");
//   setTimeout(function timer() {
//     res(console.log("5"));
//   }, 0);
// });

// b();
// c();

// ---------------------------

setTimeout(() => {
    console.log(1);
});

new Promise(function (res, rej) {
    console.log(2);
    res();
}).then(() => {
    console.log(3);
});

console.log(4);

// ---------------------------

// setTimeout(() => {
//   console.log("1");
// }, 0);

// setTimeout(() => {
//   console.log("2");
// }, 1000);

// new Promise(function (res, rej) {
//   console.log("3");
//   res();
//   console.log("4");
// }).then(() => {
//   console.log("5");
// });

// console.log("6");

// async function test1() {
//   console.log("7");
//   await test2();
//   console.log("8");
// }

// async function test2() {
//   console.log("9");
// }

// test1();

// console.log("10");

// ---------------------

console.log(1);

setTimeout(() => {
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    });
});

new Promise((res, rej) => {
    console.log(4);
    res(5);
}).then((data) => {
    console.log(data);

    Promise.resolve()
        .then(() => {
            console.log(6);
        })
        .then(() => {
            console.log(7);

            setTimeout(() => {
                console.log(8);
            }, 0);
        });
});

setTimeout(() => {
    console.log(9);
});

console.log(10);
