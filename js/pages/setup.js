/**
 * Created by Acer on 2017/5/29.
 */
import React,{Component} from 'react';
//import { StackNavigator } from 'react-navigation';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import WelcomePage from './welcomePage';
      //进行一些初始化配置
class StartScreen extends Component{
    render(){
        return(
           <WelcomePage/>
        );
    }

}


/*
const Root = StackNavigator({
    Start: { screen:StartScreen },
});

module.exports = Root;*/
