import {ManType} from './Destructuring';

export {};

test('', () => {

    let props: ManType = {
        name: 'Dimich',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'nezavisimosty street'
            }
        }
    }

    const {age, lessons} = props
    const title = props.address.street.title

    const [, ls2, ...restLessons] = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(lessons.length).toBe(3)
    expect(title).toBe('nezavisimosty street')

    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
    expect(restLessons[0].name).toBe('react')
    expect(restLessons[0]).toStrictEqual({name: 'react', title: '3'})
})