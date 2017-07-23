/**
 * Created by Acer on 2017/7/16.
 * ViewUtil
 */
import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native'

export default class  ViewUtils{
    static getLeftButton(callBack){
        return (<TouchableOpacity
            style={{padding:8}}
            onPress={callBack}>
            <Image
                style={{width:26,height:26}}
                source={require('../../res/images/ic_arrow_back_white_36pt.png')}
            />

        </TouchableOpacity>);
    }
    static getRightButton(title,callBack){
        return <TouchableOpacity
        style={{alignItems:'center'}}
        onPress={callBack}>
            <View style={{marginRight:10}}>
                <Text style={{fontSize:18,color:'#FFFFFF'}}>{title}</Text>
            </View>

        </TouchableOpacity>
    }


}

const styles = StyleSheet.create({
    headerTitleStyle:{
        fontSize:16,
        alignSelf:'center',
        color:'#FFF'
    },
    headerStyle: {
        height:50,
        backgroundColor:'#2196F3'
    },
    headerBackTitleStyle:{color:'#FFF'},
});