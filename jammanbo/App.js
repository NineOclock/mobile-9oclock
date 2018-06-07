import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
    HomeScreen,
    DetailScreen,
    ShoutemScreen,
    MonthlyWorkScreen,
} from './src/screens';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    MonthlyWork: MonthlyWorkScreen,
});

const DetailStack = createStackNavigator({
    Detail: DetailScreen,
});

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Detail: DetailStack,
        Shoutem: ShoutemScreen,
    },
);