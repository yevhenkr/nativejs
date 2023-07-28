export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LeptopType = {
    title: string
}

export type UserWithLeptop = UserType & {
    laptop: LeptopType
}
export type UserWithBooks = UserType & {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLeptop, city: string) {
    return {
        ...u,
        address: {...u.address, city}
    }
}

export function updateUserLaptop(u: UserWithLeptop, title: string) {
    return {
        ...u,
        laptop: {...u.laptop, title}
    }
}

export function addNewBooksToUser(u: UserWithLeptop & UserWithBooks, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function addNewCompanyToUser(u: WithCompaniesType, newCompany: { id: number, title: string }) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}
