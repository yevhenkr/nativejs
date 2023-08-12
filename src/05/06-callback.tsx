import React, {ChangeEvent} from 'react';
import {Lesson_8} from '../lesson_8';

export const User = () => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return <div>Dimych
        <input onChange={onChangeInput}/>
        <button>delete</button>
        <button>save</button>
        <Lesson_8/>
    </div>
}