import React from 'react';
import { View, Text, Button,StyleSheet,Image} from 'react-native';
//import { createAppContainer, createStackNavigator, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'; // Version can be specified in package.json
class LogoTitle extends React.Component{
  render(){
    return(
      <Image
        source = {require('./images/40.jpeg')}
        style = {{width: 30, height: 30}}
      />
    );
  }
}
class HomeScreen extends React.Component{
  static navigationOptions = {
    //这个位置是仅当前页面(Home页面)顶部栏目格式
    // title:"Home",
    // headerStyle: {
    //   backgroundColor: '#f4511e',   //#f4511e这个橙橘颜色好
    // },
    // headerTintColor: '#fff',  //返回按钮和标题都使用这个属性作为它们的颜色
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    headerTitle: <LogoTitle/>,
  }


  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'green',fontSize: 20}}>首页</Text>
      <Text>首页点击下面按钮跳转B</Text>
      <Button 
          title = "Go to Details" 
          onPress={() => {
            this.props.navigation.navigate('Details',{
              itemId :86,
              otherParam:'参数传递测试',
              name:"guokai",
             });
            } }
        />

<Button 
          title = "Go to Details2" 
          onPress={() => {
            this.props.navigation.navigate('Details',{
              
             });
            } }
        /> 

    </View>
    );
  }
}

export default HomeScreen; 
