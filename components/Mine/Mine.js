import React,{Component} from 'react'
import {
    View,
    Text,
    ScrollView
}from 'react-native'
import CellView from './CellView'
import {StackNavigator}from'react-navigation'
import MineHeader from  './MineHeader'
import CellMe from './CellMe'
import Headers from './Headers'
class Mine extends Component{
    render(){
        return(
            <View>
              <ScrollView>
                  <MineHeader/>
                  <View style={{backgroundColor:'#fff'}}>
                      <CellView title={'我的订单'} imgSrc={'collect'} isImg={false} righttitle={'查看全部订单'}/>
                      <View style={{flexDirection:'row',marginTop:5}}>
                          <CellMe title={'待付款'} imgSrc={'order1'}/>
                          <CellMe title={'待使用'} imgSrc={'order2'}/>
                          <CellMe title={'待评价'} imgSrc={'order3'}/>
                          <CellMe title={'退货/售后'} imgSrc={'order4'}/>
                      </View>
                  </View>
                    <View style={{marginTop:10}}>
                  <CellView title={'小南钱包'} imgSrc={'draft'} isImg={false} righttitle={'账户余额:￥100'}/>
                  <CellView title={'抵用券'} imgSrc={'like'} isImg={false} righttitle={'0'}/>
              </View>
                  <View style={{marginTop:10}}>
                      <CellView title={'积分商城'} imgSrc={'card'} isImg={false} righttitle={''}/>
                  </View>
                  <View style={{marginTop:10}}>
                      <CellView title={'今日推荐'} imgSrc={'new_friend'} isImg={true} righttitle={'me_new'}/>
                  </View>
                  <View style={{marginTop:10}}>
                      <CellView title={'我要合作'} imgSrc={'pay'} isImg={false} righttitle={'轻松开店，招财进宝'}/>
                  </View>
              </ScrollView>
            </View>
        )
    }
}
export default Mines=StackNavigator({
    Mine:{
        screen:Mine
    },

},{
    navigationOptions:{
        headerStyle:{
            backgroundColor:'#EF5000',
            marginTop:20
        },
        headerTitle:<Headers/>
    }
})