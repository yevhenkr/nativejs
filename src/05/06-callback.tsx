import {ChangeEvent} from 'react';

export const User = () => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return <div>Dimych
        <input onChange={onChangeInput}/>
        <button>delete</button>
        <button>save</button>
    </div>
}