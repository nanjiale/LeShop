import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
}from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
export default class CellMe extends Component{
    render() {
        return (
            <TouchableOpacity>
            <View style={{width:width/4,padding:5,alignItems:'center',paddingTop:5}}>
                <Image source={{uri:this.props.imgSrc}} style={{width:25,height:20}}/>
                <Text style={{fontSize:12}}>{this.props.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}