import React from 'react';
import { StyleSheet, View } from 'react-native';

import Background from '../../components/Background';

/**
 * DummyScreen
 * 개발시 더비 스크린에서 시작한다.
 */
class DummyScreen extends React.Component {

    /**
     * 네비게이션 옵션(헤더를 보이기 않게 한다.
     * @type {{header: (function(): null)}}
     */
    static navigationOptions = {
        header: () => null,
    };

    /**
     * constructor
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render
     */
    render() {
        return (
            <View style={styles.screen}>
                {/*배경 레이어 */}
                <Background imageHeight={200}/>

                {/*컨텐츠*/}
                <View stylle={styles.content}>
                </View>
            </View>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        margin: 10,
        backgroundColor: 'red'
    },
});

export default DummyScreen;