import React from 'react';
import { View, Divider, ImageBackground, Tile, Screen, ListView, Title, Subtitle, Row, Text, Icon } from '@shoutem/ui';

class MonthlyWorkScreen extends React.Component {
    static navigationOptions = {
        title: '월간뷰',
    };

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        const didBlurSubscription = this.props.navigation.addListener(
            'didFocus',
            payload => {
                // this.setState({dummy: this.getData()});
                console.log(this);
                this.setState({workDate: this.getData()});

            }
        );

        this.state = {workDate: this.getData()};
    }

    getData = () => {
        return  [
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },{
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "aa",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },{
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "aa",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "aa",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "aa",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "aa",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "aa",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
            {
                type: "work",
                date: new Date(2018, 6, 10),
                startTime: new Date(2018, 6, 10, 9, 0),
                endTime: new Date(2018, 6, 10, 18, 0),
            },
        ];
    }


    renderRow(workDate) {
        return (
            workDate.type === "work" ?
                <View>
                    <Row>
                        <View>
                            <Icon name="right-arrow" />
                        </View>
                        <View styleName="vertical">
                            <Subtitle>Bridges Rock Gym</Subtitle>
                            <Text numberOfLines={1}>www.example.com/deal/link/that-is-really-long</Text>
                        </View>
                        <View>
                            <Icon name="right-arrow" />
                        </View>
                    </Row>
                    <Divider styleName="line" />
                </View> :
                <View>
                    <Row>
                        <View styleName="vertical">
                            <Subtitle>Bridges Rock Gym</Subtitle>
                            <Text numberOfLines={1}>www.example.com/deal/link/that-is-really-long</Text>
                        </View>
                    </Row>
                    <Divider styleName="line" />
                </View>
        );
    }

    render() {
        const workDate = this.state.workDate;

        return (
            <Screen>
                <Tile>
                    <Title styleName="md-gutter-bottom">{"Test"}</Title>
                </Tile>
                <ListView
                    data={workDate}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }
}

export default MonthlyWorkScreen;