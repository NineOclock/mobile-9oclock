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
import DatePickerModal from '../../components/DatePicker/DatePickerModal';

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
            <View>
                <DatePickerModal
                    visible={this.state.modalVisible}
                    onClose={() => this.setModalVisible(false)}
                />
                <Button
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text>Show</Text>
                </Button>
                <Divider styleName="line" />
            </View>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({

});
export default DatePickerScreen;