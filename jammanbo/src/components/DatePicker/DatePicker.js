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

/**
 * https://github.com/wix/react-native-calendars
 * 데이트 피커 컴포넌트
 */
import { Calendar } from 'react-native-calendars';
import Utils from '../../utils';

class DatePicker extends React.Component {

    /**
     * 기본 상태설정
     */
    state = {
        // 현재선택 날짜
        currentDate: new Date(),
        // 선택 시작일자
        startDate: undefined,
        // 선택 완료일자
        endDate: undefined,
    };

    /**
     * 마킹을 해야하는 날짜들을 리턴한다.
     * 시작과 끝을 결정(구간선택)
     * @return {{}}
     */
    createMarkedDates = () => {
        let ret = {};
        if(this.state.startDate && this.state.endDate) {
            if(this.state.startDate.getTime() === this.state.endDate.getTime()) {
                // 시작날짜와 끝날짜가 같으면...
                ret[this.state.startDate.toISOString().substring(0, 10)] =
                    {startingDay: true, endingDay: true, color: '#00adf6', textColor: 'white'};
            } else {
                // 시작날짜와 끝날짜가 다르면..
                ret[this.state.startDate.toISOString().substring(0, 10)] =
                    {startingDay: true, color: '#00adf6', textColor: 'white'};
                ret[this.state.endDate.toISOString().substring(0, 10)] =
                    {endingDay: true, color: '#00adf6', textColor: 'white'};

                let current = this.state.startDate;
                current = Utils.addDays(current, 1);
                while (current.getDate() < this.state.endDate.getDate()) {
                    ret[current.toISOString().substring(0, 10)] =
                        {selected: true, color: '#00adf6', textColor: 'white'};
                    current = Utils.addDays(current, 1);
                }
            }
        }
        return ret;
    }

    /**
     *
     * @param day
     */
    pressDay = (day) => {
        let selectedDate = new Date(day.timestamp);

        if(this.state.startDate && this.state.endDate && this.state.startDate.getTime() !== this.state.endDate.getTime()) {
            this.setState({
                startDate: selectedDate,
                endDate: selectedDate,
                currentDate: selectedDate,
            })
        } else if(!this.state.startDate || this.state.startDate.getDate() > selectedDate.getDate()) {
            // 선택된 날짜가 선택된 시작일자 보다 작은경우
            this.setState({
                startDate: selectedDate,
                endDate: selectedDate,
                currentDate: selectedDate,
            })
        } else {
            // 선택된 날짜가 선택된 시작일자 보다 작은경우
            this.setState({
                endDate: selectedDate,
                currentDate: selectedDate,
            })
        }
    }


    render() {
        console.log(this.state);
        return (
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
                current={this.state.currentDate.toISOString().substring(0, 10)}
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
        )
    }
}

export default DatePicker;