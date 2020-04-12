import React, { useMemo, useLayoutEffect, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeComp from '../components/screen/HomeComponent';
import SignInComp from '../components/screen/SignInComponent';
import SettingScreen from '../screens/others/SettingScreen';
//import { MyTabBar } from '../components/TabBar'; used later
import CustomDrawerContent from '../components/CustomDrawerContent';
import ProductDetailScreen from '../screens/products/ProductDetailScreen';
import MyCartScreen from '../screens/products/MyCartScreen';
import ProfileScreen from '../screens/user/ProfileScreen';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode='none' initialRouteName='SignIn'>
    <AuthStack.Screen name='SignIn' component={SignInComp} />
    <AuthStack.Screen name='SignUp' component={SignUp} />
  </AuthStack.Navigator>
);

const BottomTabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const MyCartStack = createStackNavigator();
const SettingStack = createStackNavigator();
const ProfileStack = createStackNavigator();

//Home Navigation
const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none' initialRouteName='Home'>
    <HomeStack.Screen name='Home' component={HomeComp} />
    <HomeStack.Screen name='ProductDetail' component={ProductDetailScreen} />
  </HomeStack.Navigator>
);

//MyCart Navigation
const MyCartStackScreen = () => (
  <MyCartStack.Navigator headerMode='none'>
    <MyCartStack.Screen name='MyCart' component={MyCartScreen} />
  </MyCartStack.Navigator>
)

//Setting Navigation
const SettingStackScreen = () => (
  <SettingStack.Navigator headerMode='none'>
    <SettingStack.Screen name='Setting' component={SettingScreen} />
  </SettingStack.Navigator>
);

//MyCart Navigation
const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode='none'>
    <ProfileStack.Screen name='Profile' component={ProfileScreen} />
  </ProfileStack.Navigator>
)
/*
  USED LATER
 */
//Bottom Navigation 
// const BottomTabsScreen = () => (
//   <BottomTabs.Navigator
//     initialRouteName='Home'
//     tabBarOptions={{
//       allowFontScaling: true,
//       tabStyle: {
//         height: 50
//       },
//       style: {
//         height: 50
//       },
//       activeTintColor: '#2f95dc',
//       adaptive: true,
//       keyboardHidesTabBar: true,
//     }}
//     tabBar={props => <MyTabBar {...props} />}
//   >
//     <BottomTabs.Screen name='Home' component={HomeStackScreen} />
//     <BottomTabs.Screen name='Setting' component={SettingStackScreen} />
//   </BottomTabs.Navigator>
// );

//Drawer Navigation
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name='Home' component={HomeStackScreen} />
    <Drawer.Screen name='MyCart' component={MyCartStackScreen} />
    <Drawer.Screen name='Profile' component={ProfileStackScreen} />
    <Drawer.Screen name='Setting' component={SettingStackScreen} />
  </Drawer.Navigator>
);

//Root Navigation
const RootStack = createStackNavigator();
export default function RootStackScreen(props) {
  return (
    <RootStack.Navigator headerMode='none'>
      {props.token == null ? (
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
      ) : (
          <RootStack.Screen name="App" component={DrawerScreen} />
        )}
    </RootStack.Navigator>
  )
};