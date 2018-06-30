import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';

/**
 * 9 O'clock Landng Screen 입니다.
 */
class DummyScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

/**
 * LandingScreen 스타일 지정
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'gray'
    },
});

export default DummyScreen;