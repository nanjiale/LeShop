import React,{Component} from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text
}from 'react-native'
import TopList from './TopList'
import Datas from '../../LocalData/TopMenu'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
const Data=Datas.data;
export default class IndexTop extends Component{
    constructor(props){
        super(props);
        this.state={
            curpage:0
        }

    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e)=>this.changePoint(e)}
                >
                    {this.renderView()}
                </ScrollView>
                <View style={styles.pointView}>
                    {this.statuspoint()}
                </View>

            </View>
        )
    }
    statuspoint(){
        let point=[];
        for (let i=0;i<Data.length;i++){
            let color=this.state.curpage==i?{color:'#ef5000'}:{color: '#ccc'};
            point.push(
                <Text key={i} style={[styles.pointStyle,color]}>&bull;</Text>
            )
        }
        return point;
    }
    changePoint(e){
        let off=e.nativeEvent.contentOffset.x;
        let curpage=Math.floor(off/width);
        this.setState({
            curpage:curpage
        });
    }
    renderView(){
        let allView=[];
        for (let i=0;i<Data.length;i++){
            allView.push(
                <TopList key={i} dataSource={Data[i]}/>
            )
        }
        return allView;

    }
}
const styles=StyleSheet.create({
    pointStyle:{
        fontSize:30
    },
    pointView:{
        flexDirection:'row',
        justifyContent:'center',
        paddingLeft:8,
        marginTop:0
    },
    container:{
        backgroundColor:'#fff'
    }
});

