import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function HomeNavigator({ navigation, route }) {
  const dimensions = useWindowDimensions();

  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Drawer.Navigator drawerType={dimensions.width > 900 ? 'permanent' : 'front'}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Get Started',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="fas fa-home" />,
          }}
        />
        <BottomTab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: 'Resources',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="fas fa-setting" />,
          }}
        />
      </BottomTab.Navigator>
    </Drawer.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Setting':
      return 'Setting';
  }
}
