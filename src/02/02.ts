type  TechnologiesType = {
    id: number,
    title: string
}
type  TechnologiesArrayType = Array<TechnologiesType>

type  LocalCityType = {
    title: string,
    countryTitle: string,
}

type  AddressType ={
    streetTitle: string,
    city: LocalCityType
    technologies: TechnologiesArrayType
}
type  StudentType ={
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
}

export const student:StudentType = {
    id: 1,
    name: "Dimith",
    age: 32,
    isActive: true,
    address: {
        streetTitle: "Sechenova",
        city: {
            title: "Minsk",
            countryTitle: "Ukraine"
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            }, {
                id: 3,
                title: "React"
            },
        ]
    }
};