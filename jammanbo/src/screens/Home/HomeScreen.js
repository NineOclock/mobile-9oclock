import React from 'react';
import { Font } from 'expo';
import { View, Text, Button, Divider } from '@shoutem/ui';

class HomeScreen extends React.Component {
    /**
     * 네비게이션 옵션 설정
     * @type {{title: string}}
     */
    static navigationOptions = {
        title: 'Home',
    };

    /**
     * render
     */
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Button
                    onPress={() => navigate('Main')}
                >
                    <Text>메인</Text>
                </Button>
                <Divider styleName="line" />

                <Button
                    onPress={() => navigate('More')}
                >
                    <Text>More</Text>
                </Button>
                <Divider styleName="line" />

                <Button
                    onPress={() => navigate('MonthlyWork')}
                >
                    <Text>월간뷰</Text>
                </Button>
                <Divider styleName="line" />
            </View>
        );
    }
}

export default HomeScreen;