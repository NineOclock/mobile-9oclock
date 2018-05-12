import React, { Component } from 'react';
import { Platform } from 'react-native';
import { View, Text } from '@shoutem/ui';
import { Constants, Location, Permissions, MapView } from 'expo';

export default class MapTest extends Component {
    static navigationOptions = {
        title: 'Location',
    };

    state = {
        location: null,
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
        console.log(location);
        this.setState({ location });
        // let address = await Expo.Location.reverseGeocodeAsync(location.coords);
        // this.setState({ address });
    };

    render() {
        const { location } = this.state;
        return (
            this.state.location ?
                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <MapView.Marker
                        coordinate={location.coords}
                        title="My Marker"
                        description="Some description"
                    />
                </MapView> : null
        );
    }
}