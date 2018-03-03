import React,{Component} from 'react'
import {
    View,
    ScrollView
}from 'react-native'
import IndexTop from './IndexTop'
import IndexsHeader from '../Common/IndexsHeader'
import {StackNavigator}from'react-navigation'
import TopMiddle from './TopMiddle'
import MiddenBottom from './MiddenBottom'
import CommonWeb from '../Common/CommonWeb'
class Index extends Component{
    render(){
        return(
            <View>
               <ScrollView>
                   <IndexTop/>
                   <TopMiddle/>
                   <MiddenBottom nav={this.props.navigation}/>
               </ScrollView>
            </View>
        )
    }


}
export default Indexs=StackNavigator({
    Index:{
        screen:Index
    },
    web:{
        screen:CommonWeb
    }
},{
    initialRouteName:'Index',
    navigationOptions:{
        headerTitle:<IndexsHeader/>,
        headerStyle:{
            backgroundColor:'#EF5000',
            marginTop:20,
        },
    }

})
