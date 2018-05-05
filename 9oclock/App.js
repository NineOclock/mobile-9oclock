import React from 'react';
import { StyleSheet } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { View, Divider, Button, Text} from '@shoutem/ui';

/**
 * Views
 */
import ShoutemExample from './src/components/ShoutemExample';
import JunsuKimPlayGround from './src/components/JunsukimPlayGround';
import JammanboPlayGround from './src/components/JammanboPlayGround';
import LocationTest from './src/components/LocationTest';
import MapTest from "./src/components/MapTest";
import LottieTest from './src/components/LottieTest';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('./assets/fonts/SpoqaHanSansLight.ttf'),
            'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            this.state.fontLoaded ?
                (
                    <View>
                        <Button onPress={() => navigate('ShoutemExample')}>
                            <Text>Shoutem Example</Text>
                        </Button>
                        <Divider styleName="line" />

                        <Button onPress={() => navigate('JammanboPlayGround')}>
                            <Text>Jammanbo PlayGround</Text>
                        </Button>
                        <Divider styleName="line" />

                        <Button onPress={() => navigate('JunsuKimPlayGround')}>
                            <Text>JunsuKim PlayGround</Text>
                        </Button>
                        <Divider styleName="line" />

                        <Button onPress={() => navigate('LocationTest')}>
                            <Text>LocationTest</Text>
                        </Button>
                        <Divider styleName="line" />

                        <Button onPress={() => navigate('MapTest')}>
                            <Text>Map View</Text>
                        </Button>
                        <Divider styleName="line" />

                        <Button onPress={() => navigate('LottieTest')}>
                            <Text>LottieTest</Text>
                        </Button>
                        <Divider styleName="line" />

                        <Button/>
                    </View>
                )
                : null
        );
    }
}

const App = createStackNavigator({
    Home: { screen: Home },
    ShoutemExample: { screen: ShoutemExample },
    JammanboPlayGround: { screen: JammanboPlayGround },
    JunsuKimPlayGround: { screen: JunsuKimPlayGround },
    LocationTest: { screen: LocationTest },
    MapTest: { screen: MapTest},
    LottieTest: { screen: LottieTest },
});

export default App;

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