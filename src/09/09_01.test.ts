export {};

function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}
test('big refernc type <<<test ', () => {
    var user: UserType = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

    expect(superman.age).toBe(1000)


})

test('big refernc type array test ', () => {
    var users: UserType[] = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        },
    ]
    var admins = users
    admins.push({name: 'Bandugan',age: 10
    })

    expect(users[2]).toEqual({name: 'Bandugan',age: 10
    })
})
