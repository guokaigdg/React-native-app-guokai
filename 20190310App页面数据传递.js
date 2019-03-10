import React from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'; // Version can be specified in package.json
import Iconicons from 'react-native-vector-icons/Ionicons';
class HomeScreen extends React.Component{
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
    </View>
    );
  }
}
class DetailsScreen extends React.Component {
    render(){
      const {navigation} = this.props;       
      const itemId = navigation.getParam('itemId','86-ID');     //this.props.navigation.getParm() 获取上一个页传过来的数据
      const otherParam = navigation.getParam('otherParam','未接收到数据')
      const Name = navigation.getParam('name','未接收到数据')
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View>
          <Text>itemId : </Text>
          <Text style={{color:'red',fontSize: 20}}> {JSON.stringify(itemId)}</Text>
        </View>
        <Text> A页面传递过来的参数: {JSON.stringify(otherParam)}</Text>
        <Text> Name: {JSON.stringify(Name)}</Text>
        <Button
          title="Go to Details again"
          onPress={() =>
            this.props.navigation.push('Details', {        
              itemId: Math.floor(Math.random() * 100),   //随机数
              otherParam:'参数传递测试--2',     //  传递自身数据
              name:"guokai--2",    //传递自身数据
            })}
        />
        <Button 
          onPress={() => this.props.navigation.navigate('Home')} 
          title = "Go to 首页" 
        />
        <Button
        title="Go back"
        onPress ={ ()=>this.props.navigation.goBack()}
      />
      </View>
      );
    }
}
const AppNavigator = createStackNavigator(
  { 
    Home: {screen: HomeScreen,},
    Details: {screen: DetailsScreen,}, 
  },
  {
    initialRouteName: 'Home'    //设置默认首页
  }
);
export default createAppContainer(AppNavigator);
//在react-navigation升级后必须在外部包裹一层 createAppContainer(AppNavigator),
//从源码看来createAppContainer是一个高阶组件包装了路由相关的代码，估计是为了分离view层和control层做出的修改。
