import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import {
    Text,
    Icon,
} from '@shoutem/ui';

// 카렌더 다이얼로그
import DatePickerModal from '../../components/DatePicker/DatePickerModal';

/**
 * 기간을 선택하는 컴포넌트 입니다.
 */
class DateRangePicker extends React.Component {
    static navigationOptions = {
        title: 'DatePicker Example',
    };

    state = {
        modalVisible: false,
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    /**
     * 표시되는 문자를 설정합니다.
     */
    getLabel = () => {
        const year = 2018;
        const month = 7;
        const day = 30;
        return `${year}년 ${month}월 ${day}일 - ${year}년 ${month}월 ${day}일 (${day}일간)`;
    }

    render() {
        const {
            startDate,
            endDate
        } = this.props;

        return (
            <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                <View style={styles.dpRoot}>
                    <View style={styles.dpDiv}>
                        <View style={styles.dpIcon}>
                            <Icon name="events" style={{color: 'white'}} />
                        </View>
                        <View style={styles.dpLabel}>
                            <Text style={{color: 'white'}}>{this.getLabel()}</Text>
                        </View>
                    </View>
                </View>
                <DatePickerModal
                    startDate={startDate}
                    endDate={endDate}
                    visible={this.state.modalVisible}
                    onClose={() => this.setModalVisible(false)}
                    onSelect={() => this.handleSelect}
                />
            </TouchableOpacity>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
    dpRoot: {
        width: '100%',
        alignItems: 'center',
        padding: 10,
        height: 70,
    },
    dpDiv: {
        flex: 1,
        height: 50,
        backgroundColor: '#333333',
        borderRadius: 5,
        flexDirection: 'row',
    },
    dpIcon: {
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        width: 50,
        backgroundColor: '#474747',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dpLabel: {
        flex: 1,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

DateRangePicker.propTypes = {
    /**
     * 시작 날짜 입니다.
     */
    startDate: PropTypes.object.isRequired,
    /**
     * 끝 날짜 입니다.
     */
    endDate: PropTypes.object.isRequired,
};
export default DateRangePicker;