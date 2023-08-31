// Напишите функцию delay(ms),
//     которая возвращает промис,
//     переходящий в состояние "resolved" через ms миллисекунд.
//     Пример использования:

/////////////////////////////////////////////////
// function delay(time) {
//     return new Promise((res, rej)=>{
//         setTimeout(res, time)
//     })
// }
// delay(3000).then(()=> alert("Hellou world"))
//////////////////////////////////////////////////
// function delay(ms) {
//     return new Promise((res, rej)=>{
//         setTimeout(()=> ("Error"), ms)
//     })
// }
// delay(3000).then(
//     ()=> {
//         console.log("H world")
//     return 10
// })
//     .catch((err)=>{
//         console.log("error")
//     })

// fetch("https://gooler") возвращает обьект типа promis
//rjulf returnem return fetch("https://www.google.com/search?q=js") следущий catch не сразу віполнится
// fetch("https://www.google.com/search?q=js")
//     .then((data) => {
//         console.log("data from googlr", data.url)
//         return 10
//     })
//     .then((data) => {
//         console.log("data from google", data)
//     })
//     .catch((error) => {
//         console.log("ERROR", error.message)
//     })
//     .finally(() => {
//         console.log("finaly") // файнал мі используем для команд которіе надо віполнить в любом случае
//     })


//Какая последовательность ответов и почему
//поменяй для примера местами fetch
//как сделать чтоб порядок последовательно без вложености
fetch("https://www.google.com/search?q=js").then((data) => {
    console.log("data from google", data)
})
fetch("https://www.yahoo.com/search?q=js").then((data) => {
    console.log("data from yahoo", data)
})
fetch("https://www.bing.com/search?q=js").then((data) => {
    console.log("data from bing", data)
})


//поиграться посмотреть сделать ошибку и посмотреть что верн'т
// const asynсFn = async () => {//async () специяальная функция только в ней можно писть
//     try {
//         const yahooData = await fetch("https://www.yahoo.com/search?q=js") //await пишем перед промисом и вся фуекция будет віполнена последовательно
//         console.log("data from yahoo", yahooData.url);
//         const bingData = await fetch("https://www.bing.com/search?q=js")
//         console.log("data from yahoo", bingData.url);
//         const googleData = await fetch("https://www.google.com/search?q=js")
//         console.log("data from google", googleData.url);
//     } catch (err) {
//         console.log("ERROR", err.message)
//     } finally {
//         console.log("Finaly")
//     }
// }
//
// asynсFn()

////////////////////////////////////////////////////////
//Методі промиса
// all || race || any || allsettled
const pr1 = fetch("https://www.yahoo.com/search?q=js")
const pr2 = fetch("https://www.bing.com/search?q=js")
const pr3 = fetch("https://www.google.com/search?q=js")

const bigpromise = [pr1, pr2, pr3] //если хоть один с ошибкой то в then не попад'м
Promise.all(bigpromise)
    .then((bigData) => {
        console.log(bigData[0].url)
        console.log(bigData[1].url)
        console.log(bigData[2].url)
    })
    .catch((err) => {
        console.log("Big Error")
    })

