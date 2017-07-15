/**
 * Created by Acer on 2017/5/29.
 */
'use strict';
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import NavigationBar from '../common/NavigationBar';
import HomePage from './homePage';

class WelcomePage extends Component{

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{this.props.navigation.navigate('Home')},2000)
    };
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    };
    render() {
      return(
          <View style={styles.container}>
            {/*  <NavigationBar
                     title={'欢迎'}
                     style={{backgroundColor:'#6495DE'}}
              />*/}
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});

const Welcome = StackNavigator({
     Welcome :{
         screen:WelcomePage,
         navigationOptions:{
             headerTitle:'welcome',
             headerStyle:{backgroundColor:'red',height:30},
         }

     },
     Home :{
         screen:HomePage,
         navigationOptions:{
             headerStyle:{height:0},
         }
     },
});


module.exports = Welcome;