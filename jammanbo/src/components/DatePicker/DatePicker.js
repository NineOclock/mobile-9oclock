import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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

/**
 * https://github.com/wix/react-native-calendars
 * 데이트 피커 컴포넌트
 */
import { Calendar } from 'react-native-calendars';
import Utils from '../../utils';

class DatePicker extends React.Component {

    /**
     * constructor
     */
    constructor(props) {
        super(props);

        /**
         * 기본 상태설정
         */
        this.state = {
            // 선택 시작일자
            startDate: this.props.startDate,
            // 선택 완료일자
            endDate: this.props.endDate,
        };
    }

    /**
     * 마킹을 해야하는 날짜들을 리턴한다.
     * 시작과 끝을 결정(구간선택)
     * @return {{}}
     */
    createMarkedDates = () => {
        const {
            startDate,
            endDate,
        } = this.state;

        let ret = {};
        if(startDate && endDate) {
            if(startDate.isSame(endDate, 'day')) {
                // 시작날짜와 끝날짜가 같으면...
                ret[startDate.format('YYYY-MM-DD')] =
                    {startingDay: true, endingDay: true, color: '#00adf6', textColor: 'white'};
            } else {
                // 시작날짜와 끝날짜가 다르면..
                ret[startDate.format('YYYY-MM-DD')] =
                    {startingDay: true, color: '#00adf6', textColor: 'white'};
                ret[endDate.format('YYYY-MM-DD')] =
                    {endingDay: true, color: '#00adf6', textColor: 'white'};

                let current = startDate.clone();
                current = current.add(1, 'days');
                while (!current.isSame(endDate, 'day')) {
                    ret[current.format('YYYY-MM-DD')] =
                        {selected: true, color: '#00adf6', textColor: 'white'};
                    current = current.add(1, 'days');
                }
            }
        }
        return ret;
    }

    /**
     * 날짜를 클릭했을때 발생
     */
    pressDay = (date) => {
        const {
            startDate,
            endDate
        } = this.state;

        let selectedDate = moment({year: date.year, month: date.month - 1, date: date.day});

        if(startDate && endDate && !startDate.isSame(endDate, 'day')) {
            this.setState({
                startDate: selectedDate.clone(),
                endDate: selectedDate.clone(),
            })
        } else if(!startDate || startDate.isAfter(selectedDate)) {
            // 선택된 날짜가 선택된 시작일자 보다 작은경우
            this.setState({
                startDate: selectedDate.clone(),
                endDate: selectedDate.clone(),
            })
        } else {
            this.setState({
                endDate: selectedDate.clone(),
            })
        }
    }

    handleSelect = () => {
        console.log('handleSelect');
    }

    render() {
        return (
            <View>
                <Calendar
                    style={{
                        height: 380,
                        width: 300,
                    }}
                    // 마킹을 해야하는 날짜들의 배열
                    markedDates={this.createMarkedDates()}
                    // 마킹타입
                    markingType={'period'}
                    // 최초에 보여져야할 달을 결정한다.
                    //current={this.state.currentDate.toISOString().substring(0, 10)}
                    // 선택가능 최소값
                    minDate={'2018-01-01'}
                    // 선택가능 최대값
                    maxDate={'2020-12-31'}
                    // 특정일을 클릭하면 발생한다.
                    onDayPress={this.pressDay}
                    // 특정일을 롱 클릭하면 발생
                    onDayLongPress={undefined}
                    // 달력 타이틀의 날짜 포맷 결정(동작안하는듯). Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // 달이 변경되면 발생하는 이벤트
                    onMonthChange={undefined}
                    // 달이동 버튼 숨김여부
                    hideArrows={false}
                    // 닥치고 폴스
                    hideExtraDays={false}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={false}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    theme={{
                        selectedDayBackgroundColor: '#00adf5',
                    }}
                />
                <View style={styles.bottomRoot}>
                    <View style={styles.bottomLeft}></View>
                    <View style={styles.bottomRight}>
                        <Button onPress={this.handleSelect} style={{width: 50}}>
                            <Text>OK</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
    bottomRoot: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    bottomLeft: {
        flex: 3,
    },
    bottomRight: {
        flex: 1,
        height: 44,
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

DatePicker.propTypes = {
    /**
     * 시작 날짜 입니다.
     */
    startDate: PropTypes.object.isRequired,
    /**
     * 끝 날짜 입니다.
     */
    endDate: PropTypes.object.isRequired,
    /**
     * 날짜를 선택하면 발생하는 이벤트 입니다.
     */
    onSelect: PropTypes.func.isRequired,
};

export default DatePicker;