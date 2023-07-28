import {
    addNewBooksToUser, addNewCompanyToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    updateUserLaptop,
    UserType,
    UserWithBooks,
    UserWithLeptop, WithCompaniesType
} from './10_01';

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {city: 'Minsk'}
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: UserWithLeptop = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 13
        },
        laptop: {
            title: 'zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kijev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kijev')

    expect(user.laptop).toBe(movedUser.laptop)
})

test('update laptop', () => {
    let user: UserWithLeptop = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 13
        },
        laptop: {
            title: 'zenbook'
        }
    }

    const leptopUser = updateUserLaptop(user, 'asus')

    expect(user).not.toBe(leptopUser)
    expect(user.address).toBe(leptopUser.address)
    expect(user.laptop).not.toBe(leptopUser.laptop)
    expect(leptopUser.laptop.title).not.toBe('zenbook')
    expect(leptopUser.laptop.title).toBe('asus')
})

test('add new books to user', () => {
    let user: UserWithLeptop & UserWithBooks = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 13
        },
        laptop: {
            title: 'zenbook'
        },
        books: ['js', 'html', 'css']
    }

    const userCopy = addNewBooksToUser(user, 'ts')
    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(4)

})

test('Companies user', () => {
    let user: UserWithLeptop & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 13
        },
        laptop: {
            title: 'zenbook'
        },
        companies: [{id: 1, title:"Epam"}, {id: 2, title:"It-incubator"},]
    }

    const userCopy = addNewCompanyToUser(user, {id: 2, title:"ZP"})
    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.companies.length).toBe(2)

})