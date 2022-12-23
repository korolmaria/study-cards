import React from 'react';
import styles from './card.less';
import {hot} from "react-hot-loader/root";
import {TextContent} from "./TextContent";
import {Preview} from "./Preview/";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

function CardComponent() {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    )
}

export const Card = hot(CardComponent);