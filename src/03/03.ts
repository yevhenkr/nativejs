import {StudentType} from '../02/02';
import {CityType, GovernmentBuildings, HousesType} from '../02/02_02';
import {city} from './03_02.test';


export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: 4,
        title: skill
    })
}

export const addedMonyToBudget = (governmentBuilding: GovernmentBuildings, number: number) => {
    governmentBuilding.budget += number
}
export const repareHouse = (housesType: HousesType) => {
    housesType.repaired = true
}
export const increasedStaff = (governmentBuilding: GovernmentBuildings, staffCount: number) => {
    governmentBuilding.staffCount -= staffCount;
}

export const hierStaff = (governmentBuilding: GovernmentBuildings, staffCount: number) => {
    governmentBuilding.staffCount += staffCount;
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizen. I want you be happy. All ${city.citizensNumber}`
}