import React,{Component} from 'react'
import {
    View,
    StatusBar,

}from 'react-native'
export default class Main extends Component{
    render(){
        return(
            <View>
              <StatusBar
                  animated={true}
                  hidden={false}
                  translucent={true}
                  barStyle={'dark-content'}
                  backgroundColor={'#ef5000'}
              />

            </View>
        )
    }
}
