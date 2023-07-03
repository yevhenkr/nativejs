import {ManType} from './05_01';

let people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexsander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

test("should be array of greeting messages"б ={
    const messages = people.map(man => `Hello ${man.name.split(" ")}. Welcome to IT`)

    expect(messages.length).toBe(3);

}

