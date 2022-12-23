import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './header.less';
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {SortBlock} from "./SortBlock/SortBlock";
import {ThreadBlock} from "./ThreadBlock/ThreadBlock";


function HeaderComponent() {
    return (
        <header className={styles.header}>
            <SearchBlock />
            <ThreadBlock />
            <SortBlock />
        </header>
    )
}

export const Header = hot(HeaderComponent);