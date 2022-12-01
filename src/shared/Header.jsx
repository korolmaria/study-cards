import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.less';
import {concat, MyHometask, homeTask} from "../utils/task#typescript";


function HeaderComponent() {
    return (
        <div className={styles.block}>
            <h1 className={styles.header}>Hello React</h1>
            <div>{concat('HELLO', ' WORLD')}</div>
            {console.log(MyHometask)}
            {console.log(homeTask)}
        </div>
    )
}

export const Header = hot(HeaderComponent);