// publisher/subscriber
const store = {
    _subscriber: [],
    dispatch(action) {
        this._subscriber.forEach(render => render())
    },
    subscribe(subscriber) {
        this._subscriber.push(subscriber)
    }
}
store.subscribe(function subscriber() {
})
promis.then(function subscriber() {
})
setTimeout(function subscriber() {
}, 1000)
button.addEventListener('click', function subscriber() {
})

const button = {
    _subscribers: {
        "click": [],
        "doubleClick": [],
        "onFocus": [],
    },
    click() {
        this._subscribers["click"].forEach((subscriber) => subscriber())
    },
    doubleClick() {
        this._subscribers["doubleClick"].forEach((subscriber) => subscriber())
    },
    onFocus() {
        this._subscribers["onFocus"].forEach((subscriber) => subscriber())
    },
    addEventListener(eventName, subscriser) {
        this._subscriber[eventName].push(subscriser)
    },
    removeEventListener(eventName, subscriber) {
        this._subscribers[eventName] = this._subscribers[eventName].filter((sub) => sub != subscriber)
    }
}
const show = () => {
    console.log("show car")
}

const request = () => {
    console.log("start request")
}

button.addEventListener('click', show)
button.addEventListener('click', request)

button.click();

button.removeEventListener('click', request)
console.log('after removeEventListener')
button.click();

////////////////////////////////
// // publisher/subscriber
// store.subscribe(function subscriber() {
// }) // изменился стор
// button.addEvenListener('click', function subscriber() {
// }) // кликнули
// setTimeout(function subscriber() {
// }, 1000) // пpoшлa секунда
// promise.then(function subscriber() {
// }) // промис зарезолвилсA
// {/* <CustomButton onClick={() => {}} /> */
// }
// app.post('/users', function subscriber() {
// })
// // subscriber === observer === listener
// handler === watcher
// const button = {
//     _subscribers: {
//         'click': [],
//         'focus': []
//     },
//     addEvenListener(eventName, subscriber) {
//         this._subscribers [eventName].push(subscriber)
//     },
//     click() {
//         this._subscribers ['click'].forEach((sub) => sub())
//     },
//     focus() {
//         this._subscribers ['focus'].forEach((sub) => sub())
//     }
// }