import React from 'react';
import { Text, StyleSheet, View, Image, ImageBackground } from 'react-native';
import LottieView from 'lottie-react-native';

/**
 * 9 O'clock Landng Screen 입니다.
 */
class LandingScreen extends React.Component {
    /**
     * componentDidMount
     */
    componentDidMount() {
        // component 가 mount 되면 애니메이션을 시작한다.
        //this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play();
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.top}>
                    <Text style={styles.text}>9 O'Clock</Text>
                </View>

                <View style={styles.center}>
                    <View style={styles.view}></View>
                    <View style={styles.clock}>
                        <ImageBackground
                            resizeMode='contain'
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            source={require('../../../assets/images/map.png')}
                        >
                            <LottieView
                                ref={animation => {
                                    this.animation = animation;
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                source={require('../../../assets/lottie/map.json')}
                            />
                        </ImageBackground>
                    </View>
                    <View style={styles.view}></View>
                </View>

                <View style={styles.bottom}>
                </View>
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
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        flex: 8
    },
    bottom: {
        flex: 1,
    },
    view: {
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Rubik-Regular',
    }
});

export default LandingScreen;