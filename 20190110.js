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

//const REQUEST_URL = 'https://api.douban.com/v2/movie/top250'r1
const ds = new ListView.DataSource({     //创建ListView.DataSource
  rowHasChanged: (r1,r2) => r1 !== r2
});
export default class App extends Component{  //主页面
  constructor(props){     //构造轮播图函数
    super(props);
    this.state ={
        currentPage: 0,
        dataSource: ds.cloneWithRows([   //为数据源传递一个数组
          '商品1',
          '商品2',
          '商品3',
          '商品4',
          '商品5',
          '商品6',
          '商品7',
          '商品8',
          '商品9',
          '商品10',
        ]),
        advertisments:[    //轮播广告数组
        {url: 'https://img-blog.csdnimg.cn/2019011114534242.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //广东老海报
        {url: 'https://img-blog.csdnimg.cn/20190111144028927.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //上依
        {url: 'https://img-blog.csdnimg.cn/20190111144231652.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //单子
        {url: 'https://img-blog.csdnimg.cn/20190111143535201.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'},//04-22正式发售
        {url: 'https://img-blog.csdnimg.cn/2019011114422123.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70'}, //手套
        ],
      searchText: '',  //保存输入的文本
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
          <TextInput style={styles.input} placeholder='搜索商品'
            onChangeText={(text)=>{
              this.setState({searchText:text});
              console.log('输入的内容是' + this.state.searchText); //chorme Console(F12打开) 调试搜索结果 
          }}></TextInput>
          <Button style={styles.button} title='搜索'onPress = 
          {()=> {
            Alert.alert('搜索内容' + this.state.searchText,null,null);
          }}></Button>
        </View>

        <View style={styles.advertisment}>
          <ScrollView
            ref='scrollView'
            horizontal={true}   //横向轮播
            showsHorizontalScrollINdicator={false}
            pagingEnabled={true}    //分页效果
            >
            {this.state.advertisments.map((advertisment,index) => {
              return (
                <TouchableHighlight key={index} onPress={()=>Alert.alert('你点击轮播图',null,null) }>
                  <Image style={styles.advertismentContent}
                    source={{uri:advertisment.url}}>
                  </Image>
                </TouchableHighlight>
              );
            })}      
          </ScrollView>
        </View>

        <View style={styles.products}>       
           <ListView 
            dataSource={this.state.dataSource}   
            renderRow = {this._renderRow}
           />
        </View>

      </View>
    );
  }

  //标签使用{value}的方法取值
  _renderRow = (rowData, sectionID, rowID)=> {
    return (
      <View style={styles.row}>
        <Text> {rowData} </Text>  
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
      marginTop: Platform.OS === 'ios' ? 30 :0,   //状态栏
      height: 40,
      flexDirection: 'row',   //子元素在父容器中的排列位置 row横向,culumn纵向
      //justifyContent: 'center', //横向
      //alignItems:'center',  //纵向
    },
    input:{
      flex:1,
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 6,  //边框圆角
    },
    button:{
      flex:1,
    },
    advertisment:{
      //marginTop: 20,
      height: 180,
      //flexDirection:'culumn',
      backgroundColor:'pink',
    },
    advertismentContent:{
      height: 180,
      width: Dimensions.get('window').width,
    },
    products:{
      flex:1,
      //backgroundColor: 'pink',
      //justifyContent: 'center', //横向
      //alignItems:'center',  //纵向
    },
    row:{
      height: 60,
      justifyContent: "center",
      alignItems: 'center',
    },
})

// npm start 或者 react-native start 开启服务
// 编译RN react-native run-android
// 编译RN react-native run-ios --simulator "iPhone 6"
