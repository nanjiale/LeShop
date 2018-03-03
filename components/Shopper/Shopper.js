import React,{Component} from 'react'
import {
    View,
    WebView
}from 'react-native'
import {StackNavigator}from'react-navigation'
import ShopTitles from './ShopTitles'
class Shopper extends Component{
    render(){
        return(
            <View style={{flex:1,marginTop:2}}>
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: 'http://i.meituan.com/topic/scene/2?version_name=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_term=5.7&utm_source=AppStore&utm_medium=iphone&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___a20141120nanning__m1__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_bargainmiddle_30311731&userid=10086&token=p19ukJltGhla4y5Jryb1jgCdKjsAAAAAsgAAADHFD3UYGxaY2FlFPQXQj2wCyCrhhn7VVB-KpG_U3-clHlvsLM8JRrnZK35y8UU3DQ&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-02-16-25124&f=iphone&http://i.meituan.com/topic/mingdian?ci=1'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        )
    }
}
export default Shoppers=StackNavigator({
    Index:{
        screen:Shopper
    }
},{
    navigationOptions:{
            headerTitle:<ShopTitles/>,
            headerStyle:{
                backgroundColor:'#EF5000',
                marginTop:20
            }
    }
})