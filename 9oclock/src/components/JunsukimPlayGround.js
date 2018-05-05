import React, {Component} from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Text,
    NavigationBar, Button, Title, Caption } 
    from '@shoutem/ui';

export default class JunsuKimPlayGround extends Component {
    static navigationOptions = {
        title: 'JS Playground',
    };

render() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <View style={styles.container}/>
            <TabBar/>
            </View>
            </View>
        );
    }
}

class TabBar extends Component{
    render(){
      return(
        <View style={styles.tabV}>
        <TabItem TabItem name='출근'/>
        <TabItem TabItem name='근태기록'/>
        <TabItem TabItem name='연차'/>
        <TabItem TabItem name='레포트'/>
        <TabItem TabItem name='더보기'/>
        </View>
      );
    }
  }
  
  class TabItem extends Component{
    render(){
      return(
        <View style={styles.tabItem}>
          <Caption>{this.props.name}</Caption>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navBarV: {
      height:120,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#F85359',
      paddingBottom:10,
    },
    navBarT:{
      color: 'white',
      fontWeight:'bold',
      fontSize:25,
    },
    tabV:{
      backgroundColor:'#C5D0DE',
      height:80,
      paddingBottom:15,
      flexDirection:'row',
    },
    tabItem:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 5,
      margin:5,
    },
    containerView:{
      flex:1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    goBtn:{
      width:150,
      height:150,
      color: '#39B54A',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    yellowView:{
      flex:6,
      backgroundColor: 'yellow'
    }
  });