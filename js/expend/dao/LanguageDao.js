/**
 * Created by Acer on 2017/7/21.
 */
'use strict';

import {
    AsyncStorage,
} from 'react-native';

import keysData from '../../../res/data/keys';

export const FLAG_LANGUAGE = {flag_language:'language_dao_language',flag_key:'language_dao_key'};

export default class LanguageDao {
    constructor(flag){
        this.flag = flag;
    }
    fetch(){
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(this.flag,(error,result)=>{
                if(error){
                    reject(error);
                    return;
                }else{
                    if(result){
                        try{
                            resolve(JSON.parse(result));
                        }catch (e){
                            reject(error);
                        }
                    }else{
                        let data = this.flag ===FLAG_LANGUAGE.flag_language?null:keysData;
                        this.save(data);
                        resolve(data);
                    }
                }
            })
        })
    }

    save(objectData){
        let stringData = JSON.stringify(objectData);
        AsyncStorage.setItem(this.flag,stringData,(error,result)=>{

        })

    }}
