import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.less';


function HeaderComponent() {
    return (
        <div className={styles.block}>
            <h1 className={styles.header}>Hello React</h1>
        </div>
    )
}

export const Header = hot(HeaderComponent);