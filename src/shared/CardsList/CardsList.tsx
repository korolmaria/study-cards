import React from 'react';
import styles from "./cardsList.less";
import {Card} from "./Card";
import {hot} from "react-hot-loader/root";

function CardsListComponent() {
    return (
        <ul className={styles.cardsList}>
            <Card />
        </ul>
    )
}

export const CardsList = hot(CardsListComponent);