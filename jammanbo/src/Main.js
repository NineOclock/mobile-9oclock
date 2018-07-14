import React from 'react';
import { Font } from 'expo';
import { View, Text, Button } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

/**
 * 서비스에 필요한 모든 페이지를 로드한다.
 */
import {
    HomeScreen,
    DetailScreen,
    ShoutemScreen,
    MonthlyWorkScreen,
    LandingScreen,
    DummyScreen,
    LoginScreen,
    DatePickerScreen,
    MainSceen,
    MoreScreen,
} from './screens';

/**
 * 메인 스택
 */
const PagesStack = createStackNavigator({
        Home: HomeScreen,
        Main: MainSceen,
        More: MoreScreen,
        MonthlyWork: MonthlyWorkScreen,
        Landing: LandingScreen,
    },
);

/**
 * 세부 스택 세부 검토사항을 포함한다.
 */
const DetailStack = createStackNavigator({
    Detail: DetailScreen,
    DatePicker: DatePickerScreen,
});

/**
 * 샤우템 예제
 */
const ShoutemStack = createStackNavigator({
    Base: ShoutemScreen,
});

/**
 * 메인 네비게이션
 */
const MainTabNavitagion = createBottomTabNavigator(
    {
        Today: PagesStack,
        Pages: PagesStack,
        Detail: DetailStack,
        Shoutem: ShoutemStack,
    },
);

/**
 * 서비스의 진입점
 */
class Main extends React.Component {
    /**
     * 기본 상태설정
     */
    state = {
        fontLoaded: false,
        isReady: false,
        isLogin: false,
    };

    /**
     * componentDidMount
     * 폰트를 로딩한다.
     */
    async componentDidMount() {
        this.checkReady();
        await Font.loadAsync({
            'Rubik-Regular': require('../assets/fonts/SpoqaHanSansBold.ttf'),
            'rubicon-icon-font': require('../assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    /**
     * 메인 페이지 이동 여부 체크
     */
    checkReady = () => {
        // 로그인 등의 초기 앱 실행가능 상태를 체크한다.
        setTimeout(() => this.setState({isReady: true}), 3000);
    }

    /**
     * 로그인 시도
     */
    handleLogin = () => {
        this.setState({isLogin: true})
    }

    /**
     * Render
     */
    render() {
        let content = <LandingScreen/>;
        if(this.state.fontLoaded) {
            if(this.state.isReady) {
                if(this.state.isLogin) {
                    content = <MainTabNavitagion/>;
                } else {
                    content = <LoginScreen onLogin={this.handleLogin}/>;
                }
                // 로그인 무시
                content = <MainTabNavitagion/>;
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