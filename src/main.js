const todoList_1 = "1"
const todoList_2 = "2"

const todoLists = [
    {
        id: todoList_1,
        name: "What to lern",
        filter: "all",
    },
    {
        id: "2",
        name: "What to buy",
        filter: "all",
    }
]
// const tasks = [
//     {id: "10", todoListId: '1', title: "HTML", isDone: true},
//     {id: "11", todoListId: '1', title: "CSS", isDone: true},
//     {id: "12", todoListId: '1', title: "JS/TS", isDone: true},
//     {id: "13", todoListId: '2', title: "Beer", isDone: true},
//     {id: "14", todoListId: '2', title: "Meat", isDone: true},
//     {id: "15", todoListId: '2', title: "Cheeps", isDone: true}
// ]
const tasks = {
    [todoList_1]: [
        {id: "10", title: "HTML", isDone: true},
        {id: "11", title: "CSS", isDone: true},
        {id: "12", title: "JS/TS", isDone: true}
    ],
    [todoList_2]: [
        {id: "13", title: "Beer", isDone: true},
        {id: "14", title: "Meat", isDone: true},
        {id: "15", title: "Cheeps", isDone: true}
    ]
}

console.log(tasks)
console.log(todoLists)

const addTodo = (todoListTitle) => {
    const newTodoListId = "3"
    const newTodoList = {
        id: newTodoListId,
        title: todoListTitle,
        filter: "all"
    }
    const newTodoListState = [...todoLists, newTodoList]
    console.log(newTodoListState)
    const newTaskState = {...tasks, [newTodoListId]: []}
    console.log(newTaskState)
}

addTodo("What to read")

const removeTodoList = (newTodoListId) => {
    const newTodoListState = todoLists.filter(tl => tl.id !== todoLists)
    console.log(newTodoListState)
    const copyTasksState = {...tasks}
    delete copyTasksState[newTodoListId]
    console.log(copyTasksState)
}
removeTodoList("2")

const students = [
    {
        id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: "2",
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: "3",
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: "4",
        name: "John",
        age: 21,
        isMarried: false,
        scores: 100
    },
    {
        id: "5",
        name: "Helge",
        age: 21,
        isMarried: false,
        scores: 100
    },
];


//------------------------------------------------------------------------
//////Target
// const studensObj = {
//     "1": {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     "2": {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     }
// }

////////////////////////////////1 приводим students к обекту масив при помощи for
// const studensObj = {}
// for (let i = 0; i < students.length; i++) {
//     studensObj[students[i].id] = students[i]
//     delete studensObj[students[i].id].id
// }
// console.log(studensObj)

/////////////////////////////////////приводим students к обекту масив при помощи reduce и удаляем id
// console.log(students.reduce((obj, el) => {
//     obj[el.id] = el
//     delete obj[el.id].id
//     return obj
// }, {})) //схлопнуть масив в обьект

// const studentsObj_2 = {
//     "20": 1,
//     "21": 3,
//     "22": 1
// }

/////////////////////////приводим students к обекту масив при помощи reduce и ject.keys
// const studentsObj_2 = {}
// for (let i = 0; i < students.length; i++) {
//     if (Object.keys(studentsObj_2).includes(students[i].age.toString())) {
//         studentsObj_2[students[i].age] = studentsObj_2[students[i].age] + 1
//     } else {
//         studentsObj_2[students[i].age] = 1
//     }
// }

//////////////////////////////////////////////приводим students к обекту масив при помощи reduce и Object.hasOwn
// console.log(students.reduce((obj, el) => {
//     if (Object.hasOwn(obj, el.age.toString())) {
//         obj[el.age] += 1
//     } else{
//         obj[el.age] = 1
//     }
//     return obj
// }, {}))