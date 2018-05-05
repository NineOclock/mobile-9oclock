import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Test from './src/components/TestBananaImage';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view}/>
                <View style={styles.test}>
                    <Test />
                </View>
                <View style={styles.view}/>
            </View>
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