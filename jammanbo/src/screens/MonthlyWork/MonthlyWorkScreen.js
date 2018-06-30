import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

const weekday = new Array(7);
weekday[0] =  "일요일";
weekday[1] = "월요일";
weekday[2] = "화요일";
weekday[3] = "수요일";
weekday[4] = "목요일";
weekday[5] = "금요일";
weekday[6] = "토요일";

const getFormatTime = (date) => {
    return(
        (date.getHours() < 12 ? '오전 ' : '오후 ') +
        date.getHours() + '시 ' +
        date.getMinutes() + '분'
    );
}

const getWorkType = (type) => {
    if(type === 'work') {
        return {
            text: '정상근무',
            color: 'blue'
        };
    } else if(type === 'late') {
        return {
            text: '지각',
            color: 'red'
        };
    }
    return ''
}

const getSubDate = (firstTime, endTime) => {
    const gap = endTime.getTime() - firstTime.getTime();
    const gapHours = parseInt(gap / (1000 * 60 * 60));
    const gapMinute = (gap % (1000 * 60 * 60)) / (1000 * 60);
    return `${gapHours}시간 ${gapMinute}분 근무`;
}

const getOffText = (date) => {
    return `${date.getMonth() + 1}월 ${date.getDate()}일(${weekday[date.getDay()]})은 연차였어요`;
}

class MonthlyWorkScreen extends React.Component {
    static navigationOptions = {
        title: '월간뷰',
    };

    /**
     * constructor
     */
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {workDate: this.getData()};
    }

    getData = () => {
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


    renderRow(workDate) {
        const type = getWorkType(workDate.type);

        if(workDate.type === 'off') {
            return (
                <Row style={{
                    backgroundColor: 'white',
                    padding: 5,
                }}>

                    <View style={styles.rowOff}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 13, fontFamily: 'Rubik-Regular', color: 'white'}}>
                                {getOffText(workDate.date)}
                            </Text>
                        </View>
                    </View>
                </Row>
            );
        } else {
            return (
                <Row style={{
                    backgroundColor: 'white',
                    padding: 5,
                }}>

                    <View style={styles.row}>
                        {/* 미니 날짜 Viewer */}
                        <View style={{width: 70, height: 80, padding: 5}}>
                            <View
                                style={{flex: 1, borderRadius: 10, backgroundColor: 'white', flexDirection: 'column'}}>
                                <View style={{
                                    flex: 2,
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-end',
                                    marginLeft: 10,
                                    marginTop: 5
                                }}>
                                    <Text style={{fontSize: 10, fontFamily: 'Rubik-Regular'}}>
                                        {workDate.date.getMonth() + 1 + '월'}
                                    </Text>
                                </View>
                                <View style={{flex: 3, alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 21, fontWeight: 'bold'}}>
                                        {workDate.date.getDate()}
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 2,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    marginBottom: 5
                                }}>
                                    <Text style={{fontSize: 10, fontFamily: 'Rubik-Regular'}}>
                                        {weekday[workDate.date.getDay()]}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/*근무시간 뷰*/}
                        <View style={{flex: 1, flexDirection: 'column', paddingLeft: 0}}>
                            {/*from to*/}
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                <Text style={{fontSize: 15, fontFamily: 'Rubik-Regular'}}>
                                    {getFormatTime(workDate.startTime) + ' ~ ' + getFormatTime(workDate.endTime)}
                                </Text>
                            </View>
                            {/*시간*/}
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 15, fontFamily: 'Rubik-Regular', color: 'gray'}}>
                                    {getSubDate(workDate.startTime, workDate.endTime)}
                                </Text>
                            </View>
                        </View>

                        {/* 출퇴근 상태 뷰 */}
                        <View style={{flexDirection: 'column', width: 70, height: 80, padding: 5}}>
                            <View style={{flex: 1}}></View>
                            <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                                <View style={{
                                    width: 26,
                                    height: 26,
                                    backgroundColor: type.color,
                                    borderRadius: 13
                                }}></View>
                            </View>
                            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 10, fontFamily: 'Rubik-Regular', color: type.color}}>
                                    {type.text}
                                </Text>
                            </View>
                            <View style={{flex: 1}}></View>
                        </View>

                    </View>
                </Row>
            );
        }
    }

    render() {
        const workDate = this.state.workDate;

        return (
            <Screen styleName={"paper"}>
                {/*<Tile>*/}
                {/*<Title styleName="md-gutter-bottom">{"Test"}</Title>*/}
                {/*</Tile>*/}
                <Divider styleName="line" />
                <ListView
                    data={workDate}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }
}


/**
 * LandingScreen 스타일 지정
 */
const styles = StyleSheet.create({
    row: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#eaecf0',
        borderRadius: 15,
    },
    rowOff: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#6ab7f2',
        borderRadius: 15,
    },
    top: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clock: {
        flex: 8
    },
    bottom: {
        flex: 1,
    },
    view: {
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Rubik-Regular',
    }
});
export default MonthlyWorkScreen;