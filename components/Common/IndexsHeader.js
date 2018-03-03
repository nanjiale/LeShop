import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Platform,
    TouchableOpacity
} from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
export default class IndexsHeader extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity>
                <Text style={styles.itemText}>商洛</Text>
                </TouchableOpacity>
                <TextInput placeholder={'请输入要搜索的商品、店铺'} style={styles.itemInput} underlineColorAndroid={'transparent'}/>
            <TouchableOpacity>
                <Image source={{uri:'icon_homepage_message'}} style={styles.itemicon}/>
    </TouchableOpacity>
            <TouchableOpacity>
                <Image source={{uri:'icon_homepage_scan'}} style={styles.itemicon}/>
            </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create(
    {
        container:{
            flexDirection:'row',
            backgroundColor:'#EF5000',
            flexWrap:'wrap',
           justifyContent:'space-around',
            padding:5
        },
        itemicon:{
            width:Platform.OS==='ios'?30:25,
            height:Platform.OS==='ios'?30:25,
            marginLeft:5,

        },
        itemInput:{
            width:width*0.7,
            textAlign:'center',
            backgroundColor:'#fff',
            borderRadius:20,
            padding:0,
            fontSize:13,
            marginLeft:5,
            height:25

        },
        itemText:{
            marginTop:5,
            color:'#fff'
        }
    }
);