import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Modal, ImageBackground, TouchableOpacity} from 'react-native';

/**
 * 앱배경 컴포넌트
 * 배경을 이미지와 레이어로 분할합니다.
 */
class Background extends React.Component {

    /**
     * constructor
     */
    constructor(props) {
        super(props);
    }

    render() {
        const {imageHeight} = this.props;

        return (
            <View style={styles.root}>
                <ImageBackground
                    resizeMode='stretch'
                    style={styles.Image}
                    source={require('../../../assets/images/black_bg.jpg')}
                >
                    <View style={{height: imageHeight}}/>
                    <View style={{flex: 1, backgroundColor: '#f9f7fa'}}/>
                </ImageBackground>
            </View>
        )
    }
}

/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    Image: {
        width: '100%',
        height: '100%',
    },
});

Background.propTypes = {
    /**
     * 이미지를 표시할 높이 입니다.
     */
    imageHeight: PropTypes.number.isRequired,
};

export default Background;