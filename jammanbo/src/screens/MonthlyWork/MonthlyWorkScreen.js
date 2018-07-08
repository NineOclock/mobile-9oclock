import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

import {
    Divider,
    Tile,
    Screen,
    ListView,
    Title,
    Subtitle,
    Row,
    // Text,
    Caption,
    Image,
    Button,
    Icon,
    ImageBackground
} from '@shoutem/ui';

/**
 * Components Import
 */
import WorkRow from './WorkRow';
import DateRangePicker from '../../components/DatePicker/DateRangePicker';

/**
 * Utils Import
 */
import Utils from '../../utils/Utils';

class MonthlyWorkScreen extends React.Component {
    static navigationOptions = {
        title: "9 O'CLOCK",
    };

    /**
     * constructor
     */
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);

        const now = moment();
        const startDate = Utils.getFirstDayOfMonth(now);
        const endDate = Utils.getLastDayOfMonth(now);

        this.state = {
            workData: this.getDummyData(),
            startDate: startDate,
            endDate: endDate,
        };
    }

    /**
     * 더미데이터를 생성한다.
     */
    getDummyData = () => {
        let data = [];
        for(let i = 1; i <= 31; ++i) {
            let date = new Date(2018, 5, i);

            if(date.getDay() !== 0 && date.getDay() !== 6) {
                if(i === 11) {
                    data.push(
                        {
                            type: 'off',
                            date: new Date(2018, 5, i),
                        }
                    )
                } else if (i % 10 !== 4) {
                    data.push(
                        {
                            type: 'work',
                            date: new Date(2018, 5, i),
                            startTime: new Date(2018, 5, i, 8, 60 - i),
                            endTime: new Date(2018, 5, i, 18, i),
                        }
                    )
                } else {
                    data.push(
                        {
                            type: 'late',
                            date: new Date(2018, 5, i),
                            startTime: new Date(2018, 5, i, 10, 60 - i),
                            endTime: new Date(2018, 5, i, 18, i),
                        }
                    )
                }
            }
        }
        return data;
    }

    /**
     * 각각의 항목을 렌더링 한다.
     */
    renderRow(workData) {
        return (
            <WorkRow workItem={workData}/>
        );
    }

    render() {
        const {
            workData,
            startDate,
            endDate,
        } = this.state;


        return (
            <Screen styleName={"paper"}>
                <DateRangePicker
                    startDate={startDate}
                    endDate={endDate}
                />
                <ListView
                    data={workData}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
});
export default MonthlyWorkScreen;