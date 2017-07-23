/**
 * Created by Acer on 2017/7/16.
 */
'use strict';
import React,{Component} from 'react';
import { NavigationActions } from 'react-navigation'
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import ViewUtils from '../../util/ViewUtils';
import ArrayUtils from '../../util/ArrayUtils';
import LanguageDao,{FLAG_LANGUAGE} from '../../expend/dao/LanguageDao';
import CommonStyle from '../../util/commonStyle';

export default class CustomKeyPage extends Component{
    constructor(props){
        super(props);
        //初始化自定义标签的数据
        this.changeValues = [];
        this.isRemovekey = this.props.isRemovekey?true:false;
        this.state = {
            dataArray:[],
        }
    }
     static navigationOptions = ({navigation,screenProps}) => ({
         headerTitle: '自定义标签',
         headerTitleStyle:CommonStyle.headerTitleStyle,
         headerBackTitleStyle:CommonStyle.headerBackTitleStyle,
         headerLeft:ViewUtils.getLeftButton(()=>{navigation.state.params.onBack()}),
         headerRight:ViewUtils.getRightButton('保存',()=>{navigation.state.params.onSave()}),
         headerStyle: CommonStyle.headerStyle
     });

    componentDidMount () {
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.loadData();
        //将单击回调函数作为参数传递
        this.props.navigation.setParams({
            onBack: () => this.onBack(),
            onSave:() => this.onSave()
        });

    }
    loadData(){
        this.languageDao.fetch().then((data)=>{
            this.setState({
                dataArray:data
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
    onBack(){
        if(this.changeValues.length>0){
            Alert.alert(
                '提示',
                '你想要保存之前的更改吗?',
                [{
                    text:'否',onPress:()=>{
                        this.props.navigation.goBack();

                    }
                },{
                    text:'是',onPress:()=>{
                        this.onSave();

                    }
                }]
            )
        } else{
            this.props.navigation.goBack();
        }

    };
    onSave(){
        if(this.changeValues.length===0){
            this.props.navigation.goBack();
            return;
        }
        if(this.isRemovekey){
            for(let i=0,l=this.changeValues.length;i<l;i++){
                /*
                * for(let i=0,l=this.state.dataArray.length;i<l;i++){
                *      if(this.changValues[i]==this.state.dataArray[i]){
                *                this.state.dataArray.splice(i,1);
                *      }
                * }
                *
                * */
                ArrayUtils.remove(this.state.dataArray,this.changeValues[i]);
            }
        }
        this.languageDao.save(this.state.dataArray);
        this.props.navigation.goBack();
    }
    onClick(data){
        if(!this.isRemovekey){data.checked = !data.checked}
        ArrayUtils.updateArray(this.changeValues,data)

    }
    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0)return;
        let len = this.state.dataArray.length;
        let views = [];
        for (let i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
                <View style={styles.line}/>
            </View>
        );
        return views;
    }
    renderCheckBox(data){
        let leftText = data.name;
        let isChecked = data.checked;
        return (
            <CheckBox
                style={{flex:1,padding:10}}
                onClick={()=>{this.onClick(data)}}
                isChecked={isChecked}
                leftText={leftText}
                checkedImage={<Image source={require('../../pages/my/img/ic_check_box.png')}
                                      style={{tintColor:'#2196F3'}} />}
                unCheckedImage={<Image source={require('../../pages/my/img/ic_check_box_outline_blank.png')}
                                      style={{tintColor:'#2196F3'}} />}
            />
        )

    }


    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    {this.renderView()}
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    item:{
        flexDirection:'row',
    },
    line:{
        flex:1,
        height:1,
        backgroundColor:'darkgray',
    }
});

