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
        
      } from 'react-native';
      
//const REQUEST_URL = 'https://api.douban.com/v2/movie/top250' 
export default class App extends Component{  //主页面
  constructor(props){
    super(props);
    let movies = [
      {title:'肖申克的救赎'},
      {title:'这个杀手不太冷'},
      {title:'阿甘正传'},
      {title:"霸王别姬"},
      {title:"美丽人生1"},
      {title:"美丽人生2"},
      {title:"美丽人生3"},
      {title:"美丽人生4"},
      {title:"美丽人生5"},
    ];
    let dataSource = new ListView.DataSource({
      rowHasChanged:(row1, row2)=> row1 !== row2
    });
    this.state = {
      movies: dataSource.cloneWithRows(movies)
    };
  }
  render(){
    return(
      <View style={styles.container}>
      <ListView
        dataSource={this.state.movies}
        renderRow={
          movie => <Text style={styles.itemText}> {movie.title}</Text>
        }
      />
       </View>

    );
  }
}
//自定义一个显示文本的组件HeaderText直接<HeaderText>xxx</HeaderText>使用
class HeaderText extends React.Component{   //extends继承React.Component  
  render(){   //添加一个render方法
    return(
      <Text style={styles.itemText}> 
       {this.props.children}
      </Text>
    );
  }     
}
const styles = StyleSheet.create({
    overlay:{
      backgroundColor:'rgba(0,0,0,0.3)',
      alignItems:'center',
    },
    overlayHeader:{
      fontSize:33,
      fontWeight:"200",
      padding:10,
    },
    item:{
      backgroundColor:'#fff',
      borderWidth: 1,
      borderColor: '#6435c9',
      margin:6,
      flex:1,
    },
    blackgroundimage:{
      flex:1,
      //resizeMode:'cover',
      width:380,
      height:900,
    },
    image:{
      width:99,
      height:138 ,
      margin:6,
    },
    itemOne:{
      // alignSelf:'flex-start',
    },
    itemTwo:{
      alignSelf:'center',
      //flex:2,
    },
    itemThree:{
      //flex:1,
      
    },
    itemText:{
        fontSize:33,
        fontWeight:'200',
        padding:40,
    },
    container:{
      flexDirection:'row',  //内部View竖直显示
      backgroundColor: 'pink',
      flex: 1,  // 1:占满整个屏幕, 0.5占半屏
      paddingTop: 30,  //设置上边距 让出时间信号显示那部分
      //justifyContent:'space-between', // center内部view垂直居中显示,默认是flex-start,flex-end,space-between,space-around
      //alignItems:'flex-end', // 设置内部View , flex-start,center,flex-end


      // marginTop:30,   // View上边距
      // margin: 20,  //View四周边距
      // borderWidth: 2,//View边缘宽度
      // borderColor: "black",  //View边缘颜色
      // borderRadius: 16,  //View边缘圆角
      // shadowColor: '#6435c9',  //阴影
      // shadowOpacity: 0.6, //阴影的不透明度
      // shadowRadius: 2,  //阴影扩散程度   18:30
      // shadowOffset:{
      // height:1,
      // width:0,
      //},     //阴影的偏移 
    },
    // title:{
    //   color:'green',
    //   fontSize:25,  //文字大小
    //   fontStyle:'italic',   //文字样式
    //   letterSpacing:3,//字边距
    //   lineHeight:33,  //行高
    //   fontFamily:'Helvetica Neue', //改变字体
    //   fontWeight:'bold', //文字粗细  ''or 100-900    900最粗的文字
    //   textDecorationLine: 'line-through',  //line-through划掉文字 underline文字下划线
    //   textDecorationStyle: 'dashed',  //下划线样式  'solid'
    //   textAlign: "center",  //文字布局 left right center  suto
    //   //backgroundColor: 'yellow',
    // },
})

// npm start 或者 react-native start 开启服务
// 编译RN react-native run-android
 
