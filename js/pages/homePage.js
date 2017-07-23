/**
 * Created by Acer on 2017/5/29.
 */
'use strict';
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './popularPage';
import AsynStorageTest from '../../AsynStorageTest'
import MyPage from './my/myPage'
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'tb_popular',
        }
    }
    render (){
        return(
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        selectedTitleStyle={{color:'#2196F3'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                     <PopularPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="趋势"
                        selectedTitleStyle={{color:'#2196F3'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                      <AsynStorageTest/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        title="收藏"
                        selectedTitleStyle={{color:'#2196F3'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                        <View style={{backgroundColor: 'green',flex:1}}>

                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        title="我的"
                        selectedTitleStyle={{color:'#2196F3'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() =><Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <MyPage/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
       container:{
           flex:1,
       },
       image:{
           width:22,
           height:22,
       }
});


module.exports = HomePage;