import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

import Test from './src/components/ShoutemExample';

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            this.state.fontLoaded ? <Test/> : null
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    view: {
        flex: 1,
        backgroundColor: '#B0B0B0',
    },
    test: {
        flex: 5,
        backgroundColor: '#fff',
    },
});