import React from 'react';
import { StyleSheet } from 'react-native';
import { Font } from 'expo';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { TabBarBottom, createBottomTabNavigator } from 'react-navigation';
import { View, Divider, Button, Text, Icon} from '@shoutem/ui';

/**
 * Views
 */
import ShoutemExample from './src/components/ShoutemExample';
import JunsuKimPlayGround from './src/components/JunsukimPlayGround';
import JammanboPlayGround from './src/components/JammanboPlayGround';
import LocationTest from './src/components/LocationTest';
import MapTest from "./src/components/MapTest";
import LottieTest from './src/components/LottieTest';
import LoginTest from './src/components/LoginTest';


class HeaderButton extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('./assets/fonts/SpoqaHanSansBold.ttf'),
            'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            this.state.fontLoaded ?
            <Button
                onPress={() => alert('This is a button!')}
                style = {{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                }}
            >
                <Icon
                    name="share"
                    style={{
                        color: "gray",
                    }}
                />
            </Button> : null
        )
    }
}

class Home extends React.Component {
    static navigationOptions = {
        headerTitle: 'Home',
        headerRight: <HeaderButton/>
    };

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('./assets/fonts/SpoqaHanSansBold.ttf'),
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

                        <Button onPress={() => navigate('LoginTest')}>
                            <Text>Login Test</Text>
                        </Button>
                        <Divider styleName="line" />

                    </View>
                )
                : null
        );
    }
}

let HomeStack = createStackNavigator({ Home });

class TabIcon extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('./assets/fonts/SpoqaHanSansBold.ttf'),
            'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    render() {
        let name = "sidebar";
        if(this.props.name === "Home") {
            name = "home"
        } else if (this.props.name === "ShoutemExample") {
            name = "facebook"
        } else if (this.props.name === "MapTest") {
            name = "address"
        } else if (this.props.name === "LottieTest") {
            name = "more-horizontal"
        } else if (this.props.name === "LocationTest") {
            name = "history"
        }
        return (
            this.state.fontLoaded ?
                (
                    <Icon
                        name={name}
                        style={{
                            color: this.props.focused ? "tomato" : "gray",
                        }}
                    />
                )
                : null
        );
    }
}

export default createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        ShoutemExample: { screen: ShoutemExample },
        // JammanboPlayGround: { screen: JammanboPlayGround },
        // JunsuKimPlayGround: { screen: JunsuKimPlayGround },
        LocationTest: { screen: LocationTest },
        MapTest: { screen: MapTest},
        LottieTest: { screen: LottieTest },
        // LoginTest: { screen: LoginTest },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                return <TabIcon name={routeName} focused={focused}/>
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
                // borderBottomWidth: 20,
                borderBottomColor: "black",
            }
        },
    }
);

const App = createBottomTabNavigator({
    Home: { screen: Home },
    ShoutemExample: { screen: ShoutemExample },
    JammanboPlayGround: { screen: JammanboPlayGround },
    JunsuKimPlayGround: { screen: JunsuKimPlayGround },
    LocationTest: { screen: LocationTest },
    MapTest: { screen: MapTest},
    LottieTest: { screen: LottieTest },
    LoginTest: { screen: LoginTest },
});

//export default App;

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