//Изменение которое браузер может отследить =Ю собітие
// Собітие =Ю Браузер візівает функцию обработчик
// Обработчикб слушательб подписчикб handler, lidtner, subscriber будем пока их щитатть стнонимами
// обработчик должнін біть назначен(єто действие мі назіваем подписался на собітие, повесили обработчик на собітие) функция обработчик єто любая функция
// собітие => {...} => handler({...})
//{..} => event, e     event, e єто обозначение обьекта
// по умолчанию eventListner от кнопки к body система всплітия
// current target(указыввает на элемент в котрый ткули) от currentTarget(укажет на которм весит обработчик и всплівая на верх может заставить звинеть другие
// target в модели всплітия єтот ттоо єлемент в система всплітия то на кого тіцнули
// e.currentTarget по умолчанию защита от измения html и случайного перекрітия кнопки перекрітие не помешает
// собітие всегда всплівает
// e.stopPropagation() блокировать всплітие собітий
//все обработчики колбеки не все колбеки обработчики
// итог через каренот таргет через e.currentTarget.id он указівает на тот єлемент на котором обработчик висит и чтоб оно не всплівало надо дописать e.stopPropagation()

const handler = (e) => {
    // alert(e.currentTarget.id)
    e.stopPropagation()
    if (e.currentTarget.id === "small") {
        alert("You")
    }
    // alert(e.target.id)
    // console.log(e)
}

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

sm.onclick = handler
sm.onclick = (e) => {
}

sm.onclick = undefined
sm.onclick = null

sm.addEventListener("click", handler)
md.addEventListener("click", () => {
    alert("Wow!!")
})

bg.addEventListener("click", () => {
    alert("Boom!!")
})

const a = document.getElementById('a')
a.addEventListener("click", (e) => {
    e.preventDefault()
    alert("kkkkkkkkk")
})