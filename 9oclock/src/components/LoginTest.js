import React from 'react';
import { View, Divider, Button, Text} from '@shoutem/ui';

export default class LottieTest extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    handleLogin = async () => {
        let result = await this.signInWithGoogleAsync();
        let accessToken = result.accesToken;
        console.log(result);
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                androidClientId: "786269050109-mg0uhcs42losfshfrkiggqim0g1is06a.apps.googleusercontent.com",
                iosClientId: "786269050109-mg0uhcs42losfshfrkiggqim0g1is06a.apps.googleusercontent.com",
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result;
            } else {
                return {cancelled: true};
            }
        } catch(e) {
            console.log(e);
            return {error: true};
        }
    }


    getUserInfo = async (accessToken) => {
        let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}`},
        });

        return userInfoResponse;
    }
    render() {
        return (
            <View>
                <Divider/>
                <Button onPress={this.handleLogin}>
                    <Text>Google</Text>
                </Button>
                <Divider/>

            </View>
        );
    }
}
