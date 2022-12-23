import React from 'react';
import {hot} from "react-hot-loader/root";
import styles from './layout.less';

interface ILayoutProps {
    children ?: React.ReactNode
}

function MainLayout({ children }: ILayoutProps) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export const Layout = hot(MainLayout);