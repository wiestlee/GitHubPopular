/**
 * Created by Acer on 2017/7/22.
 */
export default class ArrayUtils {
    /*
    * 更新数组，若item已存在则将其从数组中删除，若不存在则将其添加到数组
    *
    * */
    static updateArray(array,item){
        for(let i =0,len = array.length; i<len;i++){
            let temp = array[i];
            if(item === temp){
                array.splice(i,1);
                return;
            }
        }
        array.push(item);
    }
    /*
    * 将数组中的指定的元素移除
    * (原数组，改变的数组的值)
    * */
    static remove(array,item){
        if(!array) return;
        for(let i=0,l=array.length;i<l;i++){
            if(item===array[i]){
                array.splice(i,1);
            }
        }
    }
}