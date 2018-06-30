import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text, Divider } from '@shoutem/ui'


/**
 * LoginScreen 입니다.
 */
class LoginScreen extends React.Component {
    login = () => {
        this.props.onLogin();
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    styleName="secondary"
                    onPress={this.login}
                >
                    <Text>Google</Text>
                </Button>
                <Divider />
                <Button
                    styleName="secondary"
                    onPress={this.login}
                >
                    <Text>Naver</Text>
                </Button>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen;