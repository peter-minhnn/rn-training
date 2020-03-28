import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox, I18nManager } from 'react-native';
import { SplashScreen } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigator from './navigation/MainAppNavigator';
import useLinking from './navigation/useLinking';
import ConfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
//Ignore warning
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Method `jumpToIndex` is deprecated']);

const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const store = ConfigureStore();

const Drawer = createDrawerNavigator();

// const DrawerContent = () => {
//   return (
//     <PreferencesContext.Consumer>
//       {preferences => (
//         <DrawerItems
//           toggleTheme={preferences.toggleTheme}
//           toggleRTL={preferences.toggleRtl}
//           isRTL={preferences.rtl}
//           isDarkTheme={preferences.theme === DarkTheme}
//         />
//       )}
//     </PreferencesContext.Consumer>
//   );
// };

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
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

  if (!isLoadingComplete && !props.skipLoadingScreen && !isReady) {
    return null;
  } else {
    return (
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
          onStateChange={state =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }>
          <MainAppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}

