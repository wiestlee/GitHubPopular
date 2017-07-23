/**
 * Created by Acer on 2017/7/15.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    AsyncStorage,
    Alert,

} from 'react-native';
import Toast,{DURATION} from 'react-native-easy-toast';
import NavigationBar from './js/common/NavigationBar'
const KEY = 'text';
export default class AsynStorageTest extends Component{
    constructor(props){
        super(props);
    }
    onSave() {
        AsyncStorage.setItem('text',this.text,(error)=>{
            if(!error){
                this.toast.show('保存成功',DURATION.LENGTH_LONG);
            } else{
                this.toast.show('保存失败',DURATION.LENGTH_LONG);
            }
        })
    }
    onFetch(){
        AsyncStorage.getItem('text',(error,result)=>{
            if(error){
                this.toast.show('取出失败',DURATION.LENGTH_LONG)
            }else{
                if(result){
                    this.toast.show('取出的结果为'+result,DURATION.LENGTH_LONG);
                }else{
                    this.toast.show('没有找到相应内容',DURATION.LENGTH_LONG)
                }
            }
        })

    }

    onRemove(){
        AsyncStorage.removeItem('text',(error)=>{
            if(!error){
                this.toast.show('移除成功',DURATION.LENGTH_LONG);
            }else{
                this.toast.show('移除失败',DURATION.LENGTH_LONG);
            }
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title='数据存储'
                    style={{backgroundColor:'#6495ED'}}
                />
                <TextInput style={{borderWidth:1,height:40,margin:5}}
                            onChangeText={(text)=>{
                                    this.text=text
                                }}/>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.tips} onPress={()=>{
                        this.onSave()
                    }}>保存</Text>
                    <Text style={styles.tips} onPress={()=>{
                        this.onFetch()
                    }}>取出</Text>
                    <Text style={styles.tips} onPress={()=>{
                        this.onRemove()
                    }}>移除</Text>
                </View>
                <Toast ref={toast=>{
                    this.toast = toast;
                }} />


            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
   },
    tips:{
       margin:10,
    }
});