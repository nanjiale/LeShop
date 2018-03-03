import React,{Component} from 'react'
import {
    View,
    Image,
    StatusBar
}from 'react-native'
import Main from '../Main/Main'
import {StackNavigator} from 'react-navigation'
class Lanuch extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar
                    hidden={true}
                />
                <Image source={{uri:'launchimage'}} style={{flex:1}}/>
            </View>
        )
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.navigation.replace('Main')
        },3000)
    }
}
export default Lanuchs=StackNavigator({
    Lanuch:{
        screen:Lanuch
    },
    Main:{
        screen:Main
    }

},{
    initalRouteName:'Lanuch',
    navigationOptions:{
        headerStyle:{
            height:0,
            width:0
        }
    }
});