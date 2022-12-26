import React from 'react';
import {hot} from "react-hot-loader/root";
import {CardsList} from "./shared/CardsList";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {Header} from "./shared/Header";
import './main.global.less';

function AppComponent () {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent);