import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'
export default class ShopTitles extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri:'icon_shop_local'}} style={{width:25,height:25}} resizeMode={'contain'}/>
                <Text style={{color:'#fff',fontSize:17}}>卖家</Text>
                <Image source={{uri:'icon_shop_search'}} style={{width:22,height:22}} resizeMode={'contain'}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#EF5000',
        padding:10
    }
});