import * as React from 'react';
import { Platform, StatusBar, YellowBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import useLinking from './src/navigation/useLinking';
import ConfigureStore from './src/store/ConfigureStore';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
//Ignore warning
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Method `jumpToIndex` is deprecated']);

const store = ConfigureStore();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.hide();
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
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
    return null;
  } else {
    return (
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>        
            <RootNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

