import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
}from 'react-native'
export  default class Headers extends Component{
    render(){
        return(
            <View style={{flexDirection:'row', flex:1,backgroundColor:'#EF5000',justifyContent:'space-between',paddingLeft:10,paddingRight:10}}>
                <TouchableOpacity>
                    <Image source={{uri:'icon_homepage_message'}} style={{width:20,height:22}}/>
                </TouchableOpacity>

                <Text style={{fontSize:17,color:'#fff'}}>我的</Text>
                <TouchableOpacity>
                <Image source={{uri:'icon_mine_setting'}} style={{width:25,height:25}}/>
                </TouchableOpacity>
            </View>
        )
    }
}