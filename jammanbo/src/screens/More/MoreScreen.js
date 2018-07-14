import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { ListView, Row } from '@shoutem/ui';

// Background Layer
import Background from '../../components/Background';
// Global Styles
import GlobalStyles from '../../utils/GlobalStyles';

/**
 * More Screen
 */
class MoreScreen extends React.Component {

    /**
     * 네비게이션 옵션(헤더를 보이기 않게 한다.
     * @type {{header: (function(): null)}}
     */
    static navigationOptions = {
        header: () => null,
    };

    /**
     * constructor
     */
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);

        this.state = {
            restaurants: [
                {
                    "name": "Gaspar Brasserie",
                    "address": "185 Sutter St, San Francisco, CA 94109",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
                },
                {
                    "name": "Chalk Point Kitchen",
                    "address": "527 Broome St, New York, NY 10013",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
                },
                {
                    "name": "Kyoto Amber Upper East",
                    "address": "225 Mulberry St, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
                },
                {
                    "name": "Sushi Academy",
                    "address": "1900 Warner Ave. Unit A Santa Ana, CA",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
                },
                {
                    "name": "Sushibo",
                    "address": "35 Sipes Key, New York, NY 10012",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
                },
                {
                    "name": "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
                }
            ]
        };
    }

    /**
     * 각각의 항목을 렌더링 한다.
     */
    renderRow() {
        return (
            <Row>
                <View
                    style={{
                        height: 100,
                        borderWidth: 1,
                        backgroundColor: 'gray',
                    }}>
                    <Text style={GlobalStyles.titleText}>
                        진창규님
                    </Text>
                </View>
            </Row>
        );
    }

    /**
     * Render
     */
    render() {
        return (
            <View style={styles.screen}>
                {/*배경 레이어 */}
                <Background imageHeight={200}/>

                {/*컨텐츠*/}
                <View style={styles.content}>
                    {/*Title*/}
                    <View style={styles.titleBlock}>
                        <Text style={GlobalStyles.titleText}>
                            9OCLOCK
                        </Text>
                    </View>

                    {/*Profile*/}
                    <View style={styles.profileBlock}>
                        {/*avatar & name*/}
                        <View style={styles.profileBlockTop}>
                            {/*avatar area*/}
                            <View style={styles.profileBlockLeft}></View>
                            {/*name Area*/}
                            <View style={styles.profileBlockRight}>
                                <Text style={GlobalStyles.titleText}>
                                    진창규님
                                </Text>
                            </View>
                        </View>

                        {/*name & setting*/}
                        <View style={styles.profileBlockBottom}>
                            {/*avatar area*/}
                            <View style={styles.profileBlockLeft}>
                                {/*avatar area*/}
                                <View style={styles.avatar}>
                                    <Avatar
                                        rounded
                                        title="CR"
                                        onPress={() => console.log("Works!")}
                                        activeOpacity={0.9}
                                        height={90}
                                        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                                    />
                                </View>
                            </View>
                            {/*name company & Setting Area*/}
                            <View style={styles.profileBlockRight}>
                                {/*name company*/}
                                <View style={styles.nameCompany}>
                                    <Text>
                                        jinchanggyu
                                    </Text>
                                    <Text>
                                        (주)아홉시
                                    </Text>
                                </View>

                                {/*setting company*/}
                                <View style={styles.setting}>
                                    <Icon
                                        // raised
                                        name='settings'
                                        color='black'
                                        onPress={() => console.log('hello')} />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*More Block*/}
                    <View style={styles.moreBlock}>
                        <ListView
                            data={this.state.restaurants}
                            renderRow={this.renderRow}
                        />
                    </View>

                    {/*ETC Block*/}
                    <View style={styles.etcBlock}>
                    </View>
                </View>
            </View>
        );
    }
}


/**
 * 스타일 지정
 */
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        margin: 15,
        flexDirection: 'column',
    },
    titleBlock: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileBlock: {
        height: 110,
        flexDirection: 'column',
    },
    profileBlockTop: {
        flex: 2,
        flexDirection: 'row',
    },
    profileBlockBottom: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.5,
    },
    profileBlockLeft: {
        flex: 3,
    },
    profileBlockRight: {
        flex: 5,
        flexDirection: 'row',
    },
    avatar: {
        position: 'absolute',
        left: 25,
        bottom: 20,
    },
    nameCompany: {
        flex: 1,
        justifyContent: 'center',
    },
    setting: {
        width: 70,
        justifyContent: 'center',
    },
    moreBlock: {
        flex: 1,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.5,
    },
    etcBlock: {
        height: 100,
        // backgroundColor: 'blue',
    },
});

export default MoreScreen;