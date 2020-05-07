import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

//import Screens
import HomeScreen from '../screens/home/components/HomeScreen'
import SignInScreen from '../screens/auth/components/SignInScreen'
import SignUpScreen from '../screens/auth/components/SignUpScreen'
import SettingScreen from '../screens/others/SettingScreen'
//import { MyTabBar } from '../components/TabBar'; used later
import CustomDrawerContent from '../components/CustomDrawerContent'
import ProductDetailScreen from '../screens/home/components/ProductDetailScreen'
import MyCartScreen from '../screens/home/components/MyCartScreen'
import ProfileScreen from '../screens/user/ProfileScreen'

//Auth Navigation
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode='none' initialRouteName='SignIn'>
    <AuthStack.Screen name='SignIn' component={SignInScreen} />
    <AuthStack.Screen name='SignUp' component={SignUpScreen} />
  </AuthStack.Navigator>
);

//Home Navigation
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode='none' initialRouteName='Home'>
    <HomeStack.Screen name='Home' component={HomeScreen} />
    <HomeStack.Screen name='ProductDetail' component={ProductDetailScreen} />
  </HomeStack.Navigator>
);

//MyCart Navigation
const MyCartStack = createStackNavigator();
const MyCartStackScreen = () => (
  <MyCartStack.Navigator headerMode='none'>
    <MyCartStack.Screen name='MyCart' component={MyCartScreen} />
  </MyCartStack.Navigator>
)

//Setting Navigation
const SettingStack = createStackNavigator();
const SettingStackScreen = () => (
  <SettingStack.Navigator headerMode='none'>
    <SettingStack.Screen name='Setting' component={SettingScreen} />
  </SettingStack.Navigator>
);

//MyCart Navigation
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator headerMode='none'>
    <ProfileStack.Screen name='Profile' component={ProfileScreen} />
  </ProfileStack.Navigator>
)
/*
  USED LATER
 */
//Bottom Navigation 
//const BottomTabs = createBottomTabNavigator();
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
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName='Home'>
    <Drawer.Screen name='Home' component={HomeStackScreen} />
    <Drawer.Screen name="MyCart" component={MyCartStackScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    <Drawer.Screen name="Setting" component={SettingStackScreen} />
  </Drawer.Navigator>
);

//Root Navigation
const RootStack = createStackNavigator();
export default function RootStackScreen(props) {
  return (
    <RootStack.Navigator headerMode='none' initialRouteName='App'>
      {
        props.token == null ? (
          <RootStack.Screen name="Auth" component={AuthStackScreen} />
        ) : (
            <>
              <RootStack.Screen name="App" component={DrawerScreen} />
            </>
          )
      }
    </RootStack.Navigator>
  )
};