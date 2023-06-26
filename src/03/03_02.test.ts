// import {AddressType, CityType, GovernmentBuildings, HousesType} from './02_02';

import {AddressType, CityType, GovernmentBuildings, HousesType} from '../02/02_02';
import {
    addedMonyToBudget, createMessage,
    hierStaff,
    increasedStaff,
    repareHouse
} from './03';

export let houses: Array<HousesType>;
export let adress: AddressType;
export let city: CityType;
let governmentBuildings: GovernmentBuildings;

beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    buildedAt: 2012, repaired: false,
                    address: {
                        number: 100,
                        street: {title: "White street"}
                    }
                },
                {
                    buildedAt: 2008, repaired: false,
                    address: {
                        number: 100,
                        street: {title: "Happy street"}
                    }
                },
                {
                    buildedAt: 2020, repaired: false,
                    address: {
                        number: 101,
                        street: {title: "Happy street"}
                    }
                }
            ],
            governmentBuildings: [
                {
                    type: "HOSPITAL", budget: 200000, staffCount: 200,
                    address: {
                        street: {
                            title: "Central Str"
                        }
                    }
                },
                {
                    type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                    address: {
                        street: {
                            title: "South Str"
                        }
                    }
                }

            ],
            citizensNumber: 1000000
        }
    }
)

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test("Buget should be changed for HOASPITAL", () => {
    addedMonyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[0].budget).toBe(200000)
})
test("Buget should be changed for FIRE-STATION", () => {
    addedMonyToBudget(city.governmentBuildings[1], -100000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should repared", () => {
    repareHouse(city.houses[0])
    expect(city.houses[0].repaired).toBe(true)
})

test("staff should be increased", () => {
    increasedStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be hire", () => {
    hierStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test("Greeting message should be correct for city", () => {
    expect(createMessage(city)).toBe("Hello New York citizen. I want you be happy. All 1000000")
})