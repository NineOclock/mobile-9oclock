import React from 'react';
import { Font } from 'expo';
import { View, Text, Button } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
    HomeScreen,
    DetailScreen,
    ShoutemScreen,
    MonthlyWorkScreen,
    LandingScreen,
    DummyScreen,
    LoginScreen,

} from './screens';

const PagesStack = createStackNavigator({
    Home: HomeScreen,
    MonthlyWork: MonthlyWorkScreen,
});

const DetailStack = createStackNavigator({
    Detail: DetailScreen,
});


const ShoutemStack = createStackNavigator({
    Base: ShoutemScreen,
});


const MainTabNavitagion = createBottomTabNavigator(
    {
        Pages: PagesStack,
        Detail: DetailStack,
        Shoutem: ShoutemStack,
    },
);

const HomeStack = createStackNavigator({
    Landing: LandingScreen,
    // Home: HomeScreen,
    // Main: MainTabNavitagion,
    MonthlyWork: MonthlyWorkScreen,
});


class Main extends React.Component {
    state = {
        fontLoaded: false,
        isReady: false,
        isLogin: false,
    };

    async componentDidMount() {
        this.checkReady();
        await Font.loadAsync({
            'Rubik-Regular': require('../assets/fonts/SpoqaHanSansBold.ttf'),
            'rubicon-icon-font': require('../assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    checkReady = () => {
        // 로그인 등의 초기 앱 실행가능 상태를 체크한다.
        setTimeout(() => this.setState({isReady: true}), 1000);
    }

    handleLogin = () => {
        this.setState({isLogin: true})
    }

    render() {
        let content = <DummyScreen/>;
        if(this.state.fontLoaded) {
            if(this.state.isReady) {
                if(this.state.isLogin) {
                    content = <MainTabNavitagion/>;
                } else {
                    content = <LoginScreen onLogin={this.handleLogin}/>;
                }
            } else {
                content = <LandingScreen/>;
            }

            // 테스트를 위한 코드 바로 진입한다.
            content = <MainTabNavitagion/>
        }
        return content;
    }
}

export default Main;