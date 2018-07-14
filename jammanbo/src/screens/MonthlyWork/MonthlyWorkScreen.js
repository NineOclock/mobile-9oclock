import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import moment from 'moment';

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
        header: () => null,
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
            <View style={styles.container}>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.background}
                    source={require('../../../assets/images/header.jpg')}
                >
                    {/*헤더*/}
                    <View
                        style={{
                            height: 130,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{fontSize: 25, color: 'white'}}
                        >
                            9OCLOCK
                        </Text>
                    </View>

                    <View
                        style={{flex: 1, backgroundColor: '#f9f7fa'}}
                    >
                        <View style={{marginTop: -37, paddingLeft: 10, paddingRight: 10}}>
                            <DateRangePicker
                                startDate={startDate}
                                endDate={endDate}
                            />
                            <View style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 5,
                                height: 50,
                                borderRadius: 5,
                                backgroundColor: '#fddce6',
                            }}>
                                <Text style={{color: 'gray'}}>조회기간 통계보기</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: '#f9f7fa', marginTop: 5}}>
                            <ListView
                                data={workData}
                                renderRow={this.renderRow}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f7fa',
    },
    background: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    datePicker: {
        top: 100
    }
});
export default MonthlyWorkScreen;