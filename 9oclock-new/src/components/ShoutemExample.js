import React, { Component } from 'react';
import { View, Card, Image, Subtitle, Caption, Examples} from '@shoutem/ui';

export default class ShoutemExample extends Component {
    static navigationOptions = {
        title: 'Shoutem Example',
    };

    render() {
        return (
            <Examples/>
        );
    }
}