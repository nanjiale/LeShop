import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import BitView from './BitView'
export default class MineHeader extends Component{
    render(){
       return(
           <View style={styles.container}>
               <TouchableOpacity>
               <View style={styles.header}>
               <Image source={{uri:'see'}} style={styles.headicon}/>
               <Text style={styles.textStyle}>小南电商</Text>
               <Image source={{uri:'avatar_vip'}} style={styles.logo}/>
                   <Image source={{uri:'icon_cell_rightarrow'}} style={styles.rightbt}/>

               </View>
               </TouchableOpacity>
               <View style={styles.bar}>
                   <BitView title={'100'} mititle={'小南券'}/>
                   <BitView title={'12'} mititle={'评价'}/>
                   <BitView title={'50'} mititle={'收藏'}/>
               </View>
           </View>
       )
    }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'column',
        height:145,
        backgroundColor:'#EF5000',
        marginTop:0
    },
    header:{
        flexDirection:'row',
        flexWrap:'wrap',
        padding:10,
        alignItems:'center',
        marginTop:20
    },
    headicon:{
        width:60,
        height:60,
        borderRadius:30,
        borderWidth:3,
        borderColor:'#05baccc7'
    },
    logo:{
        width:15,
        height:15
    },
    textStyle:{
        fontSize:19,
        marginLeft:10,
        color:'#fff'
    },
    rightbt:{
        width:12,
        height:12,
        position:'absolute',
        right:5
    },
    bar:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        backgroundColor:'rgba(255,255,255,0.5)'
    }
});