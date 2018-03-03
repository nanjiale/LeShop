import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
export default class BitView extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.titles}>{this.props.title}</Text>
                <Text style={styles.titles}>{this.props.mititle}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        width:width/3,
        padding:5,
    },
    titles:{
        fontSize:13,
        color:'#fff'
    }
});