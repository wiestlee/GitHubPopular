/**
 * Created by Acer on 2017/6/1.
 */

export default class HttpUtils{
    static get(url){
        return new Promise((response,reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }
    static post(url,data,params){
        let formData = new FormData();
        formData.append(params);
        return new Promise((response,reject)=>{
            fetch(url,{
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:formData,
            })
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .then(error=>{
                    reject(error);
                })
        })
    }
}
