import React from 'react';
import styles from './textContent.less';
import {hot} from "react-hot-loader/root";

function TextContentComponent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img src="https://cdn.dribbble.com/users/5991729/avatars/normal/e0de7c29531840de08f421c286ce23c8.png?1599187987&compress=1" alt="avatar" className={styles.avatar}/>
                    <a href="#userLink" className={styles.username}>Станислав Грачёв</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано</span>
                    3 часа назад
                </span>
            </div>
            <h2 className={styles.title}>
                <a href="#postLink" className={styles.postLink}>
                    Но представители современных социальных течений
                </a>
            </h2>
        </div>
    )
}

export const TextContent = hot(TextContentComponent);