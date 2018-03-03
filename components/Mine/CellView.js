import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
}from 'react-native'
export default class CellView extends Component{
    render(){
        return(
            <TouchableOpacity>
            <View style={styles.container}>
                <Image source={{uri:this.props.imgSrc}} style={styles.imglogo}/>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.rightView}>
                    {this.renderRightView()}
                    <Image source={{uri:'icon_cell_rightarrow'}} style={styles.btright}/>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    renderRightView(){
      if (this.props.isImg===false){
          return(
              <Text style={{fontSize:12,marginRight:5}}>{this.props.righttitle}</Text>
          )
      }else {
          return(
              <Image source={{uri:this.props.righttitle}} style={{width:28,height:15,marginRight:5}}/>
          )
      }
    }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
        flex:1,
        borderBottomWidth:0.5,
        borderBottomColor:'#e3e3e3',
        backgroundColor:'#fff'
    },
    imglogo:{
        width:26,
        height:26,
        borderRadius:13,


    },
    btright:{
        width:13,
        height:13
    },
    rightView:{
        flexDirection:'row',
        position:'absolute',
        right:5,
        alignItems:'center'
    },
    title:{
        fontSize:14,
        marginLeft:10,
        color:'#000'
    }
});
