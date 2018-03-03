import React,{Component} from 'react'
import {
    View,
    Text,
    ScrollView
}from 'react-native'
import {StackNavigator}from'react-navigation'
import MoreHeader from './MoreHeader'
import MoreItem from './MoreItem'
import IndexsHeader from "../Common/IndexsHeader";
class More extends Component{
    render(){
        return(
            <View style={{marginTop:10}}>
                <ScrollView>
                    <View>
                        <MoreItem isSwitch={false} title={'扫一扫'}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <MoreItem isSwitch={true} title={'省流模式'}/>
                        <MoreItem isSwitch={false} title={'消息提醒'}/>
                        <MoreItem isSwitch={false} title={'邀请好友'}/>
                        <MoreItem isSwitch={false} title={'清理缓存'} text={'1.1M'}/>
                    </View>
                    <View style={{marginTop:10}}>

                        <MoreItem isSwitch={false} title={'意见反馈'}/>
                        <MoreItem isSwitch={false} title={'问卷调查'}/>
                        <MoreItem isSwitch={false} title={'支付帮助'}/>

                        <MoreItem isSwitch={false} title={'网络诊断'}/>
                        <MoreItem isSwitch={false} title={'关于码团'}/>
                        <MoreItem isSwitch={false} title={'我要应聘'}/>
                    </View>
                    <View style={{marginTop:10}}>

                        <MoreItem isSwitch={false} title={'精品应用'}/>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
export default Mores=StackNavigator({
    Index:{
        screen:More
    }
},{
    navigationOptions:{
        headerTitle:<MoreHeader/>,
        headerStyle:{
            marginTop:20,
            backgroundColor:'#EF5000'
        }
    }
})