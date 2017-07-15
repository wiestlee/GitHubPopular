/**
 * Created by Acer on 2017/7/11.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    ListView,
    RefreshControl,
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NavigationBar from '../common/NavigationBar';
import  DataRepository from '../expend/dao/DataRepository';
import RepositoryCell from '../expend/dao/RepositoryCell';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component{
    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();
        this.state={
            result:'',
        }

    }

    render (){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={'最热'}
                    statusBar={{backgroundColor:'#2196F3'}}
                />
              <ScrollableTabView
                  tabBarBackgroundColor="#2196F3"
                  tabBarInactiveTextColor="mintcream"
                  tabBarActiveTextColor="white"
                  tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:2}}
                  renderTabBar={()=><ScrollableTabBar/>}
               >
                  <PopularTab tabLabel="Java">Java</PopularTab>
                  <PopularTab tabLabel="IOS">IOS</PopularTab>
                  <PopularTab tabLabel="Android">Android</PopularTab>
                  <PopularTab tabLabel="JavaScript">JavaScript</PopularTab>
              </ScrollableTabView>
            </View>
        )
    }
}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();
        this.state={
            result:'',
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
            isLoading:false,
        }

    }
    componentDidMount(){
         this.loadData();
    }
    loadData(){
        this.setState({
            isLoading:true,
        });
        let url = URL+this.props.tabLabel+QUERY_STR;
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading:false,
                })
            })
            .catch(error=>{
                 alert(error);
            })
    }
    renderRow(data){
        return <RepositoryCell data={data}/>
    }
    render(){
        return(
            <View style={{flex:1}}>
               <ListView dataSource={this.state.dataSource}
                         renderRow={(data)=>this.renderRow(data)}
                         refreshControl={<RefreshControl
                             refreshing={this.state.isLoading}
                             colors={['#2196F3']}
                             tinColor={['#2196F3']}
                             title={'Loading'}
                             titleColor={'#2196F3'}
                         />

                         }
                      />
            </View>
        )

    }}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tips:{
        fontSize:20,
    }
});