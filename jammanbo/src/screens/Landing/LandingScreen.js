import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';

/**
 * 9 O'clock Landng Screen 입니다.
 */
class LandingScreen extends React.Component {
    /**
     * componentDidMount
     */
    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode='contain'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    source={require('../../../assets/images/landing.png')}
                >
                </ImageBackground>
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
        padding: 25,
        backgroundColor: '#f9f7fa',
    },
});

export default LandingScreen;