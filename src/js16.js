// publisher/subscriber
store.subscribe(function subscriber() {
}) // изменился стор
button.addEvenListener('click', function subscriber() {
}) // кликнули
setTimeout(function subscriber() {
}, 1000) // пpoшлa секунда
promise.then(function subscriber() {
}) // промис зарезолвилсA
{/* <CustomButton onClick={() => {}} /> */
}
app.post('/users', function subscriber() {
})
// subscriber === observer === listener
handler === watcher
const button = {
    _subscribers: {
        'click': [],
        'focus': []
    },
    addEvenListener(eventName, subscriber) {
        this._subscribers [eventName].push(subscriber)
    },
    click() {
        this._subscribers ['click'].forEach((sub) => sub())
    },
    focus() {
        this._subscribers ['focus'].forEach((sub) => sub())
    }
}