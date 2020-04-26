import React, { useRef, useState, useEffect } from 'react'
import { Platform, StatusBar, YellowBox, Image, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'
import ConfigureStore from './src/store/ConfigureStore'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import NetworkProvider from './src/components/NetworkProvider'

//Ignore warning
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Method `jumpToIndex` is deprecated']);

const store = ConfigureStore();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();
  const { getInitialState } = containerRef;
  const [token, setUserToken] = useState(null);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.hide();
        // Load our initial navigation state
        //setInitialNavigationState(await getInitialState());

        const userToken = await AsyncStorage.getItem('signInToken');
        setUserToken(userToken);

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return (
      <View style={{ backgroundColor: '#024571', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./src/assets/img/giphy.gif')} />
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <NetworkProvider>
          {Platform.OS == 'ios' ? <StatusBar barStyle="dark-content" backgroundColor='#2f95dc' translucent={false}/> : <StatusBar barStyle="light-content" backgroundColor='#2f95dc' translucent={false} networkActivityIndicatorVisible={true}/>}
          <NavigationContainer>
            <RootNavigator token={token} />
          </NavigationContainer>
        </NetworkProvider>
      </Provider>
    );
  }
}

