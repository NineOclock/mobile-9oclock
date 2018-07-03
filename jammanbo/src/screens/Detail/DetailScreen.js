import React from 'react';
import { Font } from 'expo';
import { View, Text, Button, Divider } from '@shoutem/ui';

class HomeScreen extends React.Component {
    /**
     * 네비게이션 옵션 설정
     * @type {{title: string}}
     */
    static navigationOptions = {
        title: 'Detail',
    };

    /**
     * render
     */
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button
                    onPress={() => navigate('DatePicker')}
                >
                    <Text>DatePicker</Text>
                </Button>
                <Divider styleName="line" />
            </View>
        );
    }
}

export default HomeScreen;