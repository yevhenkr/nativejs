export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexsander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const dimychTransformator = (man: ManType) => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexsander', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
]

const dev2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const dev3 = people.map(p => (
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: p.name.split(' ')[0],
        lastName: p.name.split(' ')[1]
    }
))

const messages = people.map(man => `Hello ${man.name.split(" ")}. Welcome to IT`)

