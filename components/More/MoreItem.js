import React,{Component} from 'react'
import {
    View,
    Image,
    Switch,
    Text,
    StyleSheet,
    TouchableOpacity
}from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get("window");
export default class MoreItem extends Component{
    constructor(props){
        super();
        this.state={
            isOn:false
        }
    }
    render(){
        return(
            <View>
                {this.getAll()}
            </View>
        )
    }
   isCheck(){
        if (this.props.isSwitch===true){
            return(
                <Switch value={this.state.isOn} onValueChange={()=>this.setState({
                    isOn:!this.state.isOn
                })}/>
            )
        }else{
            return(
                <Image source={{uri:'icon_cell_rightarrow'}} style={styles.itemicon}/>
            )
        }
   }
   getCs(){

            return(
                <Text style={{fontSize:14,color:'#ccc'}}>{this.props.text}</Text>
            )

   }
   getAll(){
       return(
           <TouchableOpacity>
           <View style={styles.items}>
               <Text style={styles.itemText}>{this.props.title}</Text>
               <View style={styles.stylecs}>
                   {this.getCs()}
               {this.isCheck()}
               </View>
           </View>
           </TouchableOpacity>
       )
   }
}
const styles=StyleSheet.create({
    items:{
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:5,
        width:width,
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'#ccc'
    },
    itemicon:{
        width:12,
        height:12
    },
    itemText:{
        fontSize:15,
        marginLeft:10,
        color:"#000"
    },
    stylecs:{
        padding:5,
        flexDirection:'row',
        alignItems:'center'
    }
});