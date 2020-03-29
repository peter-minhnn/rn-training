import { useLinking } from '@react-navigation/native';
import { Linking } from 'react-native';

export default function(containerRef) {
  console.log('useLinking', containerRef)
  return useLinking(containerRef, {
    //prefixes: [Linking.('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          //IntroSlider: 'introslider',
          //Login: 'login',
          Home: 'home'
        }
      }
    },
  });
}
