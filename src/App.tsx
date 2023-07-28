import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './App.css';
import {Site} from "./components/Site";
import styles from "./components/Site.module.css";
import styled from "styled-components";
import {S} from './styles/_appStyles'
import {useWindowSize} from "./helpers/useWindowSize";


function App() {
    //const [burger, setBurger] = useState(true)
    const size = useWindowSize()

    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size>1000
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>PAGE 1</NavLink></S.NavWrapper>
                        <S.NavWrapper> <NavLink to={'/page/1'}>PAGE 2</NavLink> </S.NavWrapper>
                        <S.NavWrapper> <NavLink to={'/page/2'}>PAGE 3</NavLink></S.NavWrapper>
                        <S.NavWrapper> <NavLink to={'/protected'}>PAGE PROTECTED</NavLink></S.NavWrapper>
                    </div>
                    : <div></div>
                }

                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default App;






