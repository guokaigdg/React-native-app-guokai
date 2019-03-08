import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator,createBottomTabNavigator} from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>首页点击下面按钮跳转B页面</Text>
      <Button 
        title = "Go to B页面" 
        onPress={() => this.props.navigation.navigate('Details')} 
      />
      {/* <Button
        title="Go 本页"
        onPress ={ ()=>this.props.navigation.push('Home')}
      /> */}
    </View>
    );
  }
}
class DetailsScreen extends React.Component {
    render(){
      return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>点击下面按钮跳转是首页</Text>
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
const AppNavigator = createBottomTabNavigator({ 
  Home: {
    screen: HomeScreen,
    navigationOptions:()=>({
      headerTitle: '标题',
      headerBackTitle: null
    })
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions:{
      title:"B页面",
    }
  },
}, {
    initialRouteName: 'Home',  //设置 stack navigator 的默认页面， 必须是路由配置中的某一个
});

export default createAppContainer(AppNavigator);
//在react-navigation升级后必须在外部包裹一层 createAppContainer(AppNavigator),
//从源码看来createAppContainer是一个高阶组件包装了路由相关的代码，估计是为了分离view层和control层做出的修改。
