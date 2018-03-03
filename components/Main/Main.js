import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    Platform
}from 'react-native'
import Common from '../Common/Common'
import Indexs from '../Index/Index'
import TabNavigator from "react-native-tab-navigator"; 'react-native-tab-navigator'
import Mines from '../Mine/Mine'
import Shoppers from '../Shopper/Shopper'
import Mores from '../More/More'
export default  class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:'首页'
        }
    }
    render(){
        return(
            <View style={style.container}>
               <Common/>
                <TabNavigator>
                    {this.renderAllItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected',<Indexs/>)}
                    {this.renderAllItem('卖家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',<Shoppers/>)}
                    {this.renderAllItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected',<Mines/>)}
                    {this.renderAllItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected',<Mores/>)}
                </TabNavigator>
            </View>
        )
    }
//返回Item
    renderAllItem(titleText,imgUrl,selectImgUri,el){
        return(
            <TabNavigator.Item
                title={titleText}
                selectedTitleStyle={style.TitlesStyle}
                renderIcon={()=><Image source={{uri:imgUrl}} style={style.barIcon}/>}
                renderSelectedIcon={()=><Image source={{uri:selectImgUri}} style={style.barIcon}/>}
                selected={this.state.selectedTab===titleText}
                onPress={()=>this.setState(
                    {
                        selectedTab:titleText,
                    }
                )}

            >
                {el}

            </TabNavigator.Item>
        )
    }
}
const style=StyleSheet.create({
    TitlesStyle:{
        color:'#EF5000'
    },
    barIcon:{
        width:Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25,
    },
    container:{
        flex:1
    }

});
