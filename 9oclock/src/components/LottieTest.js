import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Rocket Boom!',
    };

    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(30, 120);
    }

    render() {
        return (
            <LottieView
                ref={animation => {
                    this.animation = animation;
                }}
                source={require('../../assets/lottie/bms-rocket.json')}
            />
        );
    }
}
