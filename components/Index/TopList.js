import React,{Component} from 'react'
import {
    ListView,
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
}from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
export default class TopList extends Component{
    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(this.props.dataSource),
        }
    }
    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this.allRowView(rowData)}
                    scrollEnabled={false}
                    contentContainerStyle={styles.lvView}
                />
            </View>
        )
    }
    allRowView(rowData){
        return(
            <TouchableOpacity>
            <View style={styles.cellStyle}>
                <Image source={{uri:rowData.image}} style={styles.cellImg}/>
                <Text style={styles.cellText}>{rowData.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    lvView:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width
    },
    cellStyle:{
        width:width/5,
        padding:5,
        alignItems:'center'
    },
    cellImg:{
        width:45,
        height:45,

    },
    cellText:{
        fontSize:12
    }
});