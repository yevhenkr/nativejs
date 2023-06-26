export type  TechnologiesType = {
    id: number,
    title: string
}
export type  TechnologiesArrayType = Array<TechnologiesType>

export type  LocalCityType = {
    title: string,
    countryTitle: string,
}

export type  AddressType = {
    streetTitle: string,
    city: LocalCityType
}
export type  StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: "Dimith",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Sechenova",
        city: {
            title: "Minsk",
            countryTitle: "Ukraine"
        }
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
        }],
};

export const madeStudentActive = (student:StudentType) =>{
    student.isActive = true
}

export const doseStudentLiveIn = (s:StudentType, city: string)=>{
    return s.address.city.countryTitle === city
}