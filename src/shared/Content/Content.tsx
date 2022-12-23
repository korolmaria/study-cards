import React from 'react';
import styles from './content.less';
import {hot} from "react-hot-loader/root";

interface IContentProps {
    children ?: React.ReactNode
}

function ContentComponent({ children}: IContentProps) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}

export const Content = hot(ContentComponent);