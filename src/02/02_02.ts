export type AddressType = {
    number?:number,
    street:{
        title:string,
    }
}

export type HousesType = {
    id?: number,
    buildedAt: number,
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildings ={
    type:"HOSPITAL" | "FIRE-STATION",
    budget: number,
    staffCount: number,
    address: AddressType
}
export type CityType = {
    title: string,
    houses: Array<HousesType>,
    governmentBuildings: Array<GovernmentBuildings>,
    citizensNumber: number
}

