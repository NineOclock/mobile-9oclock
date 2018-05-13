/**
 * 어플리케이션 메인입니다.
 */
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore()
const RouterWithRedux = connect()(Router);

import {
    Text,
    StyleSheet,
} from 'react-native';
import Landing from './Landing';
import Home from './Home';
import Search from './Search';

const TabIcon = ({ selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="landing" component={Landing} title="Landing" initial={true}/>
                        <Scene
                            key="rootTabBar"
                            tabs={true}
                            tabBarStyle={{backgroundColor: '#ffffff'}}>
                            <Scene key="home" component={Home} title="Home" icon={TabIcon} initial/>
                            <Scene key="search" component={Search} title="Search" icon={TabIcon}/>
                        </Scene>
                    </Scene>
                </RouterWithRedux>
            </Provider>

        )
    }
}