import React from 'react';
import styles from './controls.less';
import {hot} from "react-hot-loader/root";
import {KarmaCounter} from "./KarmaCounter";
import {CommentsButton} from "./CommentsButton";
import {Actions} from "./Actions";

function ControlsComponent() {
    return (
        <div className={styles.controls}>
            <KarmaCounter />
            <CommentsButton />
            <Actions />
        </div>
    )
}

export const Controls = hot(ControlsComponent);