import React,{Component} from 'react'
import {
    WebView,
    View,
    Text
}from 'react-native'
import Dimensions from 'Dimensions'
const {width, height}=Dimensions.get('window');
export default class CommonWeb extends Component{
    static navigationOptions={
        headerTitle: <Text style={{color:'#fff',textAlign:'center',marginLeft:(width/2)-70}}>详情</Text>,
        headerTintColor:'#fff',


    };
    render(){
        return(
            <View style={{flex:1}}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.props.navigation.state.params.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}

                />
            </View>
        )
    }
}