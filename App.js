/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Text,
        View,
        ListView,
        StyleSheet,
        Image,
        Alert,
        AppRegistry,
        Platform,
        Button,
        TouchableHighlight,
        ImageBackground,
        TextInput,
        ScrollView,
        Dimensions,
        StatusBar,
       // NavigationExperimental,
      } from 'react-native';

//const REQUEST_URL = 'https://api.douban.com/v2/movie/top250'
export default class App extends Component{  //主页面
  constructor(props){
    super(props);
    this.state = {
        currentPage:0
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <StatusBar 
          backgroundColor = {'pink'}   //设置顶部状态栏背景颜色, 仅在Android有效
          barStyle = {'default'}              //设置默认样式
          networkActivityIndicatorVisible = {true}  //显示正在的网络请求状态, 仅在ios有效
        ></StatusBar>
        <View style={styles.searchbar}>
          <TextInput style={styles.input} placeholder='搜索商品'>
          </TextInput>
          <Button style={styles.button} title='搜索'
           onPress = {()=>Alert.alert('你点击了搜索按钮','点击OK关闭弹窗',null) }
          ></Button>
        </View>

        <View style={styles.advertisment}>
          <ScrollView
            ref='scrollView'
            horizontal={true}   //横向轮播
            showsHorizontalScrollINdicator={false}
            pagingEnabled={true}    //分页效果
            >
            <TouchableHighlight onPress = {()=> Alert.alert('你点击了轮播图片','你好呀', null)}>
            <Text style={{width: Dimensions.get('window').width ,height:180,backgroundColor:'#5cadad'}}>
               广告1 
            </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> Alert.alert('你点击了轮播图片')}>
            <Text style={{width:Dimensions.get('window').width ,height:180,backgroundColor:'orange'}}>
              广告2
            </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> Alert.alert('你点击了轮播图片')}>
            <Text style={{width:Dimensions.get('window').width ,height:180,backgroundColor:'yellow'}}>
              广告3
            </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=> Alert.alert('你点击了轮播图片')}>
            <Text style={{width: Dimensions.get('window').width ,height:180,backgroundColor:'blue'}}>
              广告4
            </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress = {()=>Alert.alert('你点击了轮播图')}> 
            <Text style={{width: Dimensions.get('window').width ,height:180,backgroundColor:'black'}}>
              广告5
            </Text>
            </TouchableHighlight>

          </ScrollView>
        </View>
        <View style={styles.products}>
          <Text>
          商品列表
          </Text>


        </View>
      </View>
    );
  }
  componentDidMount(){
    this._startTimer();
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  _startTimer(){
    this.interval = setInterval(() =>{
      nextPage = this.state.currentPage + 1;
      if(nextPage >= 5){
        nextPage = 0;  //如果翻滚到最后一页,下次翻滚第一页
      }
      this.setState({currentPage:nextPage});
        const offSetX = nextPage * Dimensions.get('window').width;
        this.refs.scrollView.scrollResponderScrollTo({ x:offSetX, y:0, animated:true});
    },2000);   //定时器间隔时间20000毫秒
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      //padding:23,
    },
    searchbar:{
      marginTop: Platform.OS === 'ios' ? 20 :0,
      height: 40,
      flexDirection: 'row',   //子元素在父容器中的排列位置 row横向,culumn纵向
      //justifyContent: 'center', //横向
      //alignItems:'center',  //纵向
    },
    input:{
      flex:1,
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 5,
    },
    button:{
      flex:1,
    },
    advertisment:{
      //marginTop: 20,
      height: 180,
      //flexDirection:'culumn',
    },
    products:{
      flex:1,
      backgroundColor: 'pink',
      justifyContent: 'center', //横向
      alignItems:'center',  //纵向
    },
})

// npm start 或者 react-native start 开启服务
// 编译RN react-native run-android
