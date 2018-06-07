import React from 'react';
import { Font } from 'expo';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('../../../assets/fonts/SpoqaHanSansBold.ttf'),
            'rubicon-icon-font': require('../../../assets/fonts/rubicon-icon-font.ttf'),

        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            this.state.fontLoaded ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Home Screen haha</Text>
                    <Button
                        title="Go to Next"
                        onPress={() => this.props.navigation.navigate('MonthlyWork')}
                    />
                </View> : null
        );
    }
}

export default HomeScreen;