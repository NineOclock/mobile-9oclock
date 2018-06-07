// components/landing.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Landing extends Component {
    render () {
        const {routes} = this.context;
        //const goToPageTwo = () => Actions.pageTwo({text: 'Helo world'});
        return (
            <View style={styles.outerContainer}>
                <Text>
                    The current scene is titled {this.props.routes.scene.title}.
                </Text>
                <Text onPress={Actions.rootTabBar}>This is PageOne!</Text>
            </View>

        );
    }
}

Landing.propTypes = {
    routes: PropTypes.object,
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1
    }
})

export default connect(({routes}) => ({routes}))(Landing);