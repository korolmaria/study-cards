import React from 'react';
import styles from './preview.less';
import {hot} from "react-hot-loader/root";

function PreviewComponent() {
    return (
        <div className={styles.preview}>
            <img className={styles.previewImg} src="https://cdn.dribbble.com/userupload/4169991/file/original-9ec86460dd9a002651b54f2fc233f950.png?compress=1&resize=700x525" alt="preview"/>
        </div>
    )
}

export const Preview = hot(PreviewComponent);