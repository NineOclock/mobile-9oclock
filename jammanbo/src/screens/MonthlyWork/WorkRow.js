import React from 'react';
import PropTypes from 'prop-types';
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
/**
 * Utils Import
 */
import Utils from '../../utils'

/**
 * 월간 출근 화면에 하나의 행(하나의 날짜)에 해당하는 컴포넌트
 */
class WorkRow extends React.Component {
    render() {
        const {
            workItem
        } = this.props;
        const type = Utils.getStringType(workItem.type);

        if(workItem.type === 'off') {
            return (
                <Row style={{
                    backgroundColor: '#f9f7fa',
                    padding: 0,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                }}>
                    <View style={styles.rowOff}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 13, fontFamily: 'Rubik-Regular', color: 'white'}}>
                                {Utils.getStringOff(workItem.date)}
                            </Text>
                        </View>
                    </View>
                </Row>
            );
        } else {
            return (
                <Row style={{
                    backgroundColor: '#f9f7fa',
                    padding: 0,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                }}>
                    <View style={styles.row}>
                        {/* 미니 날짜 Viewer */}
                        <View style={{width: 55, height: 65}}>
                            <View
                                style={{flex: 1,
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    backgroundColor: '#f9f7fa',
                                    flexDirection: 'column'}}
                            >
                                <View style={{
                                    flex: 3,
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-end',
                                    marginLeft: 17,
                                    marginTop: 5
                                }}>
                                    <Text style={{fontSize: 9, fontFamily: 'Rubik-Regular'}}>
                                        {workItem.date.getMonth() + 1 + '월'}
                                    </Text>
                                </View>
                                <View style={{flex: 5, alignItems: 'center', justifyContent: 'flex-start'}}>
                                    <Text style={{fontSize: 21, fontWeight: 'bold'}}>
                                        {workItem.date.getDate()}
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 3,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    marginBottom: 5
                                }}>
                                    <Text style={{fontSize: 9, fontFamily: 'Rubik-Regular'}}>
                                        {Utils.weekdays[workItem.date.getDay()]}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/*근무시간 뷰*/}
                        <View style={{flex: 1, flexDirection: 'column', paddingLeft: 0}}>
                            {/*from to*/}
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                                <Text style={{fontSize: 15, fontFamily: 'Rubik-Regular'}}>
                                    {
                                        Utils.getStringDate(workItem.startTime) + ' ~ ' +
                                        Utils.getStringDate(workItem.endTime)
                                    }
                                </Text>
                            </View>
                            {/*시간*/}
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 15, fontFamily: 'Rubik-Regular', color: 'gray'}}>
                                    {Utils.getStringWorkRange(workItem.startTime, workItem.endTime)}
                                </Text>
                            </View>
                        </View>

                        {/* 출퇴근 상태 뷰 */}
                        <View style={{flexDirection: 'column', width: 70, height: 65, padding: 5}}>
                            <View style={{flex: 1}}></View>
                            {/*<View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>*/}
                                {/*<View style={{*/}
                                    {/*width: 26,*/}
                                    {/*height: 26,*/}
                                    {/*backgroundColor: type.color,*/}
                                    {/*borderRadius: 13*/}
                                {/*}}></View>*/}
                            {/*</View>*/}
                            {/*<View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>*/}
                                {/*<Text style={{fontSize: 10, fontFamily: 'Rubik-Regular', color: type.color}}>*/}
                                    {/*{type.text}*/}
                                {/*</Text>*/}
                            {/*</View>*/}
                            <View style={{flex: 1}}></View>
                        </View>

                    </View>
                </Row>
            );
        }
    }
}


/**
 * LandingScreen 스타일 지정
 */
const styles = StyleSheet.create({
    row: {
        width: '100%',
        flexDirection: 'row',
        height: 65,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
    },
    rowOff: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
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

WorkRow.propTypes = {
    /**
     * 해당하는 날짜의 근무 정보입니다.
     */
    workItem: PropTypes.object.isRequired,
};

export default WorkRow;