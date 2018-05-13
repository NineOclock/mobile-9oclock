import React from 'react';
import Main from './src/components/Main';

// React Native & Navigation Bug... So Write This.
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class App extends React.Component {
    render () {
        return (
            <Main />
        )
    }
}

export default App;
