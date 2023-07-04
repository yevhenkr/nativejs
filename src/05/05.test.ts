import {createGreetingMessage, ManType} from './05_01';

let people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexsander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

test("should be array of greeting messages",() =>{
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Welcome to IT");
    expect(messages[1]).toBe("Hello Alexsander. Welcome to IT");
    expect(messages[2]).toBe("Hello Dmitry. Welcome to IT");
})

