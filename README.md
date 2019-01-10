### React-native 练手电商APP
业余时间学习下React-native, 感兴趣的可以来一起交流下
> email: guokaigdg@gmail.com <br>
> wechat:guokaigdg <br>
> 微博: @我叫猫叫佩奇

#### 开发环境
> eact-native-cli: 2.0.1 <br>
> node: v8.9.4 <br>
> macOS Mojave 版本10.14.1 <br>
> 测试环境: react-native run-ios --simulator "iPhone 6"


#### 进度
> (2018-12-17 - 2019-02-05)

#### 2018/12/17:
- 一时冲动准备要开始了

#### 2019/1/7
- 创建第一个页面,并且创建一个轮播图
<img src = "https://img-blog.csdnimg.cn/20190108013736540.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70" width = '25%'>

#### 2019/1/8
 - 给搜索按钮/轮播图片添加点击事件   <br>
   搜索:直接到<Buttoon> ps:<Button onPress={()=>Alert.alert('点击了按钮','点击OK关闭',null)}><br>
   轮播图/ListView : <TouchableHighlight>
 - 状态栏目添加了网络请求状态/状态栏颜色  <br>
  注意区分Android/ios不同表现,使用:StatusBar组件

#### 2019/1/9
- 更换app图标 
- 给商品区域创立一个单个栏目,如图
- 优化将轮播图格式独立出来<br>
  多个格式放一个数组: style={[styles.advertismentContenr,{backgroundColor:'blue'}]}
<img src = "https://img-blog.csdnimg.cn/2019010922561528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d1b2thaWdkZw==,size_16,color_FFFFFF,t_70" width = '25%'>

#### 2019/1/10
- 使用JavaScript数组的map()方法进一步优化TouchableHighlight组件(优化轮播图)
- onChangeText() 输入框变化时候调用此回调函数
- Chorm Console调试搜索结果
- 优化搜索框样式borderRedius
- 轮播图使用网络图片

#### 遗留问题
- [ ] iPhone不同机型有刘海的跟没有刘海marginTop大小自动适应

<img src = "https://img-blog.csdnimg.cn/20190111014039891.gif" width = '25%'>
