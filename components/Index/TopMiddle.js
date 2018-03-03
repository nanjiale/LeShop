import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
}from 'react-native'
import Dimensions from 'Dimensions'
import MiddleData from '../../LocalData/HomeTopMiddleLeft'
import RightCell from './RightCell'
const {width, height}=Dimensions.get('window');
export default class TopMiddle extends Component{
    render(){
        return(
            <View style={styles.container}>
                {this.renderleft()}
                <View>
                    {this.renderright()}
                </View>

            </View>
        )
    }
    renderright(){
        let rightView=[];
        let dataRight=MiddleData.dataRight;
        for (let i=0;i<dataRight.length;i++){
            rightView.push(
                <RightCell  isPlay={true} data={dataRight[i]} key={i+'ls'}/>
            )
        }
        return rightView;
    }
    renderleft(){
        let leftView=[];
        let dataLeft=MiddleData.dataLeft;
        for (let i=0;i<dataLeft.length;i++){
          leftView.push(
              <TouchableOpacity key={i} >
              <View style={styles.left}>
                  <Image source={{uri:dataLeft[i].img1}} style={styles.leftImg}/>
                  <Image source={{uri:dataLeft[i].img2}} style={styles.rightImg}/>
                  <Text>{dataLeft[i].title}</Text>
                  <View style={styles.bottomView}>
                      <Text style={styles.bottomleft}>{dataLeft[i].price}</Text>
                      <Text style={styles.bottomright}>{dataLeft[i].sale}</Text>
                  </View>

              </View>
              </TouchableOpacity>
          )
        }
        return leftView;
    }
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:10,
        width:width,
        backgroundColor:'#fff'
    },
    left:{
        padding:5,
        borderRightWidth:0.5,
        borderRightColor:'#ccc',
        backgroundColor:'#fff',
        width:width/2,
        alignItems:'center'
    },
    leftImg:{
        width:80,
        height:25
    },
    rightImg:{
        width:80,
        height:50
    },
    bottomView:{
        flexDirection:'row',

    },
    bottomleft:{
        fontSize:12,
        color:'#7ec7b6'
    },
    bottomright:{
        fontSize:8,
        color:'#cc0000',
        backgroundColor:'#fcf34a',
        borderRadius:4,
        marginLeft:2,
        paddingTop:2,
        alignSelf:'flex-start'
    }
});