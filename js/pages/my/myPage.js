/**
 * Created by Acer on 2017/7/16.
 */
'use strict';
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Alert,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import NavigationBar from '../../common/NavigationBar';
import ViewUtils from '../../util/ViewUtils'
import CustomKeyPageView from './customKeyPage'


class MyPageView extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
       headerTitle:'我的',
       headerStyle:{height:50,backgroundColor:'#2196F3'},
       headerTitleStyle:{alignSelf:'center',color:'#FFF'},
   };
    render() {
        return(
            <View style={styles.container}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('customKey',)
                }}
                >自定义标签</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});


const MyPage = StackNavigator({
    My: {screen:MyPageView},
    customKey:{screen:CustomKeyPageView}
});

module.exports = MyPage;