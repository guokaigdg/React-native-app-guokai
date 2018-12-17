/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  Text,
        View,
        Image,
        Alert,
        AppRegistry,
        Platform,
        Button,
        StyleSheet,
        TouchableHighlight,
        ImageBackground,
        TextInput,
      } from 'react-native';
      
      class Blink extends Component {
        constructor(props) {
          super(props);
          this.state = { isShowingText: true };
      
          // 每1000毫秒对showText状态做一次取反操作
          setInterval(() => {
            this.setState(previousState => {
              return { isShowingText: !previousState.isShowingText };
            });
          }, 1000);
        } 
        render() {
          // 根据当前showText的值决定是否显示text内容
          if (!this.state.isShowingText) {
            return null;
          }
          return (
            <Text>{this.props.text}</Text>
          );
        }
      }
export default class App extends Component{  //主页面
  render() {
    let pic = {
      uri: 'https://img-blog.csdnimg.cn/20181209132253692.jpg'
    };
    return (
      <View>
         <View style={{height:200}} /> 
             {/* 闪烁文字 */}
              <Text style={styles.welcome}>
                <Blink text= '傻逼 你好'/> 
              </Text>
            {/*image 居中显示*/}
            <View style={{alignItems:'center'}}>  
              
              <Image source={pic} style={styles.image}/>
            </View>
            {/* 账户 */}
            <View accessible={true} accessibilityLabel = 'count' style = {styles.inputWrap} accessibilityLabel = 'username'>  
                <Text> 账户 </Text>
                <View style={styles.dividingLine} />
                <TextInput placeholder = {'Your Account'} />
            </View>        
            {/*密码*/}
            <View accessible={true} accessibilityLabel = 'passwd' style = {styles.inputWrap} accessibilityLabel = 'passwd'>  
                <Text>密码</Text>
                <View style={styles.dividingLine} />
                <TextInput placeholder = {'Your Password'} />
            </View> 
            <View style={{height:10}} /> 
            <View style={styles.login}>
            <Button
                onPress={() => {
                Alert.alert("登录测试项");
              }}
              title="登录"
            />
            </View>

            {/* <TouchableOpacity
              accessible={true}
              accessibilityLabel="Tap me!"
              onPress={this._onPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Press me!</Text>
              </View>
            </TouchableOpacity> */}

      </View>
    );
  }
}
// StyleSheet.create来集中定义组件的样式
const styles = StyleSheet.create({
  welcome:{
    color: 'pink',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width:200, 
    height:200,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stretch:{
    width: 50,
    height: 200,
  },
  login:{
    margin:20,
    borderRadius:16,
  },
  loginBtn: {
    width: 260,
    height: 36,
    borderRadius: 16,
    backgroundColor: '#9a74f9',
    shadowColor: '#9a74f9',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    flexDirection: 'row',
    shadowOpacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  dividingLine: {
    marginLeft: 4,
    height: 22,
    width: 1,
    backgroundColor: '#474455',
  },
  inputWrap: {
    width: 240,
    height: 44,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b4b4b4',
  },

});

// 编译RN react-native run-android
 
