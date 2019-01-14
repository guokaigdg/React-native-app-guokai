/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 */
import React, {Component} from 'react';
//import {View,Navigator} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Home from './home';
export default class App extends React.Component{  //主页面
  render(){
    return(
      <Navigator initialRoute = {{
          name: 'home',
          Component: Home
        }}
          configureScene = {(route) =>{
          return Navigator.SceneConfigs.FloatFromRight;
        }} 
          renderScene = {(route, navigator) =>{
          const Component = route.component;
          return < Component {...route.params} navigator={navigator} />
        }}/>
    );
 }
}
