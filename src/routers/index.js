/**
 * Created by yangj on 2017/11/16.
 */
import React from 'react';
import { StackNavigator,TabNavigator } from 'react-navigation';
import { View, Text,Image } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Button from '../component/Button'
import Icon from 'react-native-vector-icons/Ionicons';
import color from "../component/Colors"

import Home from '../containers/Home';
import User from '../containers/User';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import Detail111 from '../containers/Detail111';

//安卓端需要加上一個headerRight讓title居中
const headerOptions = {
    headerStyle: { backgroundColor: color.theme },
    headerTitleStyle: { color: '#fff', alignSelf: 'center' },
    headerTintColor: '#eee',
    // headerBackTitle: null,
    headerRight: <View style={{ width: 24 }}/>
};
const StackOptions = ({navigation}) => {
    console.log(navigation,'asdasdasdsa');
}
const MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header:null,
            tabBarLabel: '主页',
            tabBarIcon: ({ tintColor, focused }) => (
                <Text>🐶</Text>
            ),
        },
    },
    User: {
        screen: User,
        navigationOptions: {
            header:null,
            tabBarLabel: '个人中心',
            tabBarIcon: ({ tintColor, focused }) => (
                <Text>🐔</Text>
            ),
        },
    },
},{lazy:true,animationEnabled:true});

/**
 * 路由配置中心({navigation}) => StackOptions({navigation}) },
 */
const Routers = StackNavigator({
    MyTab: {
        screen: MyTab,
    },
    Search: { screen: Search, navigationOptions: { headerTitle: 'Search',header:null, ...headerOptions } },
    Detail: { screen: Detail, navigationOptions: { headerTitle: 'Detail', ...headerOptions } },
    Detail111: { screen: Detail111, navigationOptions: { headerTitle: 'Detail111', ...headerOptions} },
}, {
    headerMode: 'screen',
    initialRouteName:'MyTab',
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
    navigationOptions: (nav) => (
        GEM.navigation=nav.navigation//将导航发放到全局
    ),
});
export default Routers;





