import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../screens/LoginScreen';
// import IntroSliderScreen from '../screens/IntroSliderScreen';
import HomeNavigator from '../navigation/HomeNavigator';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'HomeNavigator';

export default function MainAppNavigator({ navigation, route }) {
    //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

    return (
        <Stack.Navigator initialRouteName={INITIAL_ROUTE_NAME} screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen
                name='IntroSlider'
                component={IntroSliderScreen}
            />
            <Stack.Screen
                name='Login'
                component={Login}
            /> */}
            <Stack.Screen
                name='HomeNavigator'
                component={HomeNavigator}
            />
        </Stack.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'IntroSlider':
            return null;
        case 'Login':
            return 'Login';
    }
}