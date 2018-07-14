import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { MapView} from 'expo';
import { Marker, Circle} from 'react-native-maps';


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
 * Utils Import
 */
import Utils from '../../utils/Utils';

class MainScreen extends React.Component {
    static navigationOptions = {
        title: "9 O'CLOCK",
        header: () => null,
    };

    /**
     * constructor
     */
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    resizeMode='cover'
                    style={styles.background}
                    source={require('../../../assets/images/black_bg.jpg')}
                >
                    {/*헤더*/}
                    <View
                        style={{
                            height: 300,
                            flexDirection: 'column',
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    >
                        <View style={{
                            flex: 2,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}>
                            <Text
                                style={{fontSize: 25, color: 'white'}}
                            >
                                9OCLOCK
                            </Text>
                        </View>
                        <View style={{
                            flex: 2,
                            justifyContent: 'flex-end',
                        }}>
                            <Text
                                style={{fontSize: 20, color: '#f1a2c6'}}
                            >
                                2018년 7월 9일 월요일
                            </Text>
                            <Text
                                style={{fontSize: 13, color: '#f1d2dc'}}
                            >
                                카드할부를 생각하시면서 월요일을 이겨냅시다.
                            </Text>
                        </View>
                        <View style={{
                            flex: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 5,
                                height: 50,
                                borderRadius: 5,
                                backgroundColor: '#fddce6',
                            }}>
                                <Text style={{color: 'gray', fontSize: 15}}>
                                    출근위치로 들어가면 출근체크 버튼이 나타납니다.
                                </Text>
                            </View>
                        </View>

                        <View style={{
                            flex: 2,
                        }}>
                            {/*Dummy*/}
                        </View>
                    </View>

                    <View
                        style={{flex: 1, backgroundColor: '#f9f7fa'}}
                    >
                        <View
                            style={{
                                marginTop: -70,
                                flex: 1,
                                flexDirection: 'column',
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    borderRadius: 5,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    height: '100%',
                                    backgroundColor: 'white'
                                }}>
                                <MapView
                                    provider="google"
                                    style={{
                                        flex: 1,
                                        borderRadius: 5,
                                        borderWidth: 0.3,
                                        borderColor: 'gray',
                                    }}
                                    initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: 37.79825,
                                            longitude: -122.4324,
                                        }}
                                        title={'test'}
                                        description={'test'}
                                    />
                                    <Circle
                                        radius={2000}
                                        strokeColor={'#86c3f0'}
                                        fillColor={'rgba(202,225,243,0.5)'}
                                        center={{
                                            latitude: 37.77825,
                                            longitude: -122.4624,
                                        }}
                                    >
                                    </Circle>
                                </MapView>
                            </View>
                            <View
                                style={{
                                    height: 120,
                                    flexDirection: 'row',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                }}>

                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}>
                                    <View style={{
                                        height: 20,
                                    }}>
                                        <Text style={{color: 'black', fontSize: 13}}>
                                            오늘출근
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingTop: 5,
                                    }}>
                                        <View
                                            style={{
                                                height: '100%',
                                                borderRadius: 5,
                                                backgroundColor: 'white',
                                                shadowOffset: { width: 0, height: 1 },
                                                shadowOpacity: 0.3,
                                                flexDirection: 'column',
                                            }}>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Icon name="pin" style={{color: 'gray'}}/>
                                            </View>
                                            <View style={{
                                                height: 22,
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{color: 'gray', fontSize: 12}}>
                                                    아직 출근 전입니다.
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}>
                                    <View style={{
                                        height: 20,
                                    }}>
                                        <Text style={{color: 'black', fontSize: 13}}>
                                            오늘퇴근
                                        </Text>
                                    </View>
                                    <View style={{
                                        flex: 1,
                                        paddingTop: 5,
                                    }}>
                                        <View
                                            style={{
                                                height: '100%',
                                                borderRadius: 5,
                                                backgroundColor: 'white',
                                                shadowOffset: { width: 0, height: 1 },
                                                shadowOpacity: 0.3,
                                                flexDirection: 'column',
                                            }}>
                                            <View style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Icon name="about" style={{color: 'gray'}}/>
                                            </View>
                                            <View style={{
                                                height: 22,
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{color: 'gray', fontSize: 12}}>
                                                    출근기록 후 사용할 수 있습니다
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
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
export default MainScreen;