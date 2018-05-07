import React from 'react';
import { View, Divider, Button, Text} from '@shoutem/ui';
import { WebBrowser,AuthSession  } from 'expo';


export default class LottieTest extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    handleLoginGoogle = async () => {
        let result = await this.signInWithGoogleAsync();
        let accessToken = result.accessToken;
        // let userInfo = await this.getUserInfoGoogle(accessToken);
    }

    handleLoginKakao = async () => {
        let result = await this.signInWithKakaoAsync();
    }

    signInWithKakaoAsync = async () => {
        //let redirectUrl = AuthSession.getRedirectUrl();
        //console.log(redirectUrl);

        let url = 'https://kauth.kakao.com/oauth/authorize?client_id=4eb28180381318fbf00307e6c3205d1b&redirect_uri=https://auth.expo.io/nineoclock/9oclock-ea03ceb0-8c87-49d7-9f18-9ec3d1ee4ac4&response_type=code';
        // let result = await fetch('https://kauth.kakao.com/oauth/authorize?client_id=4eb28180381318fbf00307e6c3205d1b&redirect_uri=https://test.com/oauth&response_type=code');
        // console.log(result);
        let result = this._OpenBrowserAsync(url);
    }

    _OpenBrowserAsync = async (url) => {
        let ret = await AuthSession.startAsync({
            authUrl: url,
        });
        // let ret = await WebBrowser.openAuthSessionAsync(result.url, "https://test.com/oauth");
        console.log(ret);
    };

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


    getUserInfoGoogle = async (accessToken) => {
        let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${accessToken}`},
        });

        return userInfoResponse;
    }
    render() {
        return (
            <View>
                <Divider/>
                <Button onPress={this.handleLoginGoogle}>
                    <Text>Google</Text>
                </Button>
                <Divider/>

                <Button onPress={this.handleLoginKakao}>
                    <Text>Kakao</Text>
                </Button>
                <Divider/>

            </View>
        );
    }
}
