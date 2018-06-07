import React from 'react';
import { View, Text, Button } from 'react-native';
import { Examples} from '@shoutem/ui';

class ShoutemScreen extends React.Component {
    static navigationOptions = {
        title: 'Shoutem Example',
    };
    render() {
        return (
            <Examples/>

        );
    }
}

export default ShoutemScreen;

