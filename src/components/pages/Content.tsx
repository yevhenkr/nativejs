import React from 'react';
import {useNavigate} from "react-router-dom";

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props
    const navigate=useNavigate()

    const onClickmainPageHandler=()=>{
        navigate('/page/0')
    }
    const onClickmainComeBackHandler=()=>{
        navigate(-1)
    }

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={onClickmainComeBackHandler}>Назад</button>
            <button onClick={onClickmainPageHandler}>Главная страница</button>
        </div>
    );
};

