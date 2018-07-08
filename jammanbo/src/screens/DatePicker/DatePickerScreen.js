import React from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import {
    Divider,
    Tile,
    Screen,
    ListView,
    Title,
    Subtitle,
    Row,
    Text,
    Caption,
    Image,
    Button,
    Icon,
    ImageBackground
} from '@shoutem/ui';


import DateRangePicker from '../../components/DatePicker/DateRangePicker';

class DatePickerScreen extends React.Component {
    static navigationOptions = {
        title: 'DatePicker Example',
    };

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Screen styleName={"paper"}>
                <DateRangePicker/>
            </Screen>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({

});
export default DatePickerScreen;