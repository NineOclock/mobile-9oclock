import React, { Component } from 'react';
import { Platform } from 'react-native';
import { View, Text } from '@shoutem/ui';
import { Constants, Location, Permissions } from 'expo';

export default class LocationTest extends Component {
    static navigationOptions = {
        title: 'Location',
    };

    state = {
        address: null,
        errorMessage: null,
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        // this.setState({ location });
        let address = await Expo.Location.reverseGeocodeAsync(location.coords);
        this.setState({ address });
    };

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.address) {
            text = JSON.stringify(this.state.address);
        }

        return (
            <View>
                <Text>{text}</Text>
            </View>
        );
    }
}