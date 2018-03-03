import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
}from 'react-native'
export default class MoreHeader extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.moreText}>更多</Text>
                <TouchableOpacity style={styles.iconSet}>
                <Image source={{uri:'icon_mine_setting'}} style={styles.iconS} />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
   container:{
       flexDirection:'row',
       justifyContent:'space-around',
        flex:1

   },
   iconSet:{

       position:'absolute',
       right:10

   },
    iconS:{
        width:25,
        height:25,
    },
    moreText:{
       fontSize:16,
        fontWeight:'bold',
        color:'white'
    }
});