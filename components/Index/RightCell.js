import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
}from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
export default class RightCell extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>this.renderView(this.props.data.url,this.props.data.title)}>
                <View style={styles.container}>
                    <View >
                        <Text style={[{color:this.props.data.titleColor},styles.title]}>{this.props.data.title}</Text>
                        <Text style={{fontSize:12}}>{this.props.data.subTitle}</Text>
                    </View>
                    {this.renderImg()}
                </View>
            </TouchableOpacity>
        )

    }
    renderView(url,title){
        if (url!==null){
            if (this.props.fun!==undefined){
                this.props.fun(url,title)
            }
        }
    }
    renderImg(){
        if(this.props.isPlay){
            return(
                <Image source={{uri:this.props.data.rightImage}} style={styles.cellImg} resizeMode={'contain'}/>
            )
        }
    }
}
const styles=StyleSheet.create(
    {
        container:{
            width:width/2,
            flexDirection:'row',
            padding:5,
            justifyContent:'space-between',
            borderBottomWidth:0.5,
            borderBottomColor:'#ccc',
            borderLeftWidth:0.5,
            borderLeftColor:'#ccc',
            height:59
        },
        title:{
            fontSize:15,

        },
        cellImg:{
            width:70,
            height:40
        }
    }
);
