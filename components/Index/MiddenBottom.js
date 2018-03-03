import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Alert
}from 'react-native'
import HomeData from '../../LocalData/HomeTopMiddle'
import RightCell from './RightCell'
import ReData from '../../LocalData/XMG_Home_D4'
const uidatas=ReData.data;
const datas=HomeData.data;
export default class MiddenBottom extends Component{
    render(){
        return(
            <View>
                {this.renderMid()}
                <View style={{flexDirection:'row',backgroundColor:'#fff',flexWrap:'wrap'}}>
                    {this.renderItem()}
                </View>

            </View>
        )
    }
    renderItem(){
       let uil=[];
       for (let i=0;i<uidatas.length;i++){
           let ds={title:uidatas[i].maintitle,titleColor:uidatas[i].typeface_color,subTitle:uidatas[i].typeface_color,subTitle:uidatas[i].deputytitle,rightImage:this.getwh(uidatas[i].imageurl),url:uidatas[i].tplurl};
           uil.push(


                    <RightCell data={ds} isPlay={true} key={i} fun={(url,title)=>this.renders(url,title)}/>


           )
       }
       return uil;
    }
    getwh(wh){
        if (wh.indexOf('w.h')===-1){

            return wh;
        }else{

            return wh.replace('w.h','70.40');
        }
    }
    renderMid(){
        let databar=[];
        for(let i=0;i<datas.length;i++){
            databar.push(
                <TouchableOpacity key={i}>

                    <View style={styles.barCell}>
                        <View >
                            <Text style={[{color:'#EF5000'},styles.title]}>{datas[i].title}</Text>
                            <Text style={{fontSize:12}}>{datas[i].subTitle}</Text>
                        </View>
                        <Image source={{uri:datas[i].image}} style={styles.barImg}/>
                    </View>
                </TouchableOpacity>

            )
        }
        return databar;
    }
    renders(url,title){
        this.props.nav.navigate('web',{url:url.replace('imeituan://www.meituan.com/web?url=',''),title:title})
    }
}
const styles=StyleSheet.create({
   barCell:{
       flexDirection:'row',
       justifyContent:'space-between',
       padding:10,
       backgroundColor:'#fff',
       marginTop:10
   },
    title:{
        fontSize:20,

    },
    barImg:{
       height:40,
        width:90,
    }
});