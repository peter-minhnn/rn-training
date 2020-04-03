import React, { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeComponent from "../components/HomeComponent";
import SettingScreen from "../screens/SettingScreen";
import { TabBarIcon, TabBarLabel, MyTabBar } from '../components/TabBar';

// const AuthStack = createStackNavigator();
// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen
//       name="SignIn"
//       component={SignIn}
//       options={{ title: "Sign In" }}
//     />
//     <AuthStack.Screen
//       name="CreateAccount"
//       component={CreateAccount}
//       options={{ title: "Create Account" }}
//     />
//   </AuthStack.Navigator>
// );

const BottomTabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();

//Home Navigation
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeComponent} />
  </HomeStack.Navigator>
);

//Setting Navigation
const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Setting" component={SettingScreen} />
  </SettingStack.Navigator>
);

//Bottom Navigation 
const BottomTabsScreen = () => (
  <BottomTabs.Navigator
    initialRouteName='Home'
    tabBarOptions={{
      allowFontScaling: true,
      tabStyle: {
        height: 50,
      },
      style: {
        height: 60
      },
      activeTintColor: '#2f95dc',
      adaptive: true,
      keyboardHidesTabBar: true,
      labelStyle: {
        height: '100%'
      }
    }}
    //tabBar={props => <MyTabBar {...props} />}
  >
    <BottomTabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: ({ focused, navigation }) => <TabBarLabel focused={focused} name='Home' navigation={navigation}/>,
        tabBarIcon: ({ focused, navigation }) => <TabBarIcon focused={focused} name='home' navigation={navigation}/>
      }}
    />
    <BottomTabs.Screen
      name="Setting"
      component={SettingStackScreen}
      options={{
        tabBarLabel: ({ focused, navigation }) => <TabBarLabel focused={focused} name='Setting' navigation={navigation}/>,
        tabBarIcon: ({ focused, navigation }) => <TabBarIcon focused={focused} name='settings' navigation={navigation}/>
      }}
    />
  </BottomTabs.Navigator>
);

//Drawer Navigation
const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={BottomTabsScreen} />
  </Drawer.Navigator>
);

//Root Navigation
const RootStack = createStackNavigator();
export default function RootStackScreen() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="App" component={DrawerScreen} />
    </RootStack.Navigator>
  )
};