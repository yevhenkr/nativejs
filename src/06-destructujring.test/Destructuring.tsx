//Диструктуризация масива const [] = array
//Диструктуризация обьекта const {} = obj

import React from 'react';

export type LessonType = {
    title: string
    name?: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonType[],
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {modal: string}
}

// export const ManComponent: React.FC<PropsType> = ({title, man}) => { //альтернативній вароиант
export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man,...restProps} = props
    return <div>
    <h1> {title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}