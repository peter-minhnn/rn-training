import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { drawerContentStyles } from '../styles'
import { Icon } from 'native-base';

const _drawItem = [
  {
    title: 'My Account',
    isShow: true,
    data: [
      {
        navOptionThumb: 'ios-user',
        navOptionName: 'My Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'ios-heart',
        navOptionName: 'My Wish List',
        screenToNavigate: 'WishList',
      },
      {
        navOptionThumb: 'md-cart',
        navOptionName: 'My Cart',
        screenToNavigate: 'Cart',
      },
      {
        navOptionThumb: 'cart-plus',
        navOptionName: 'My Cart',
        screenToNavigate: 'Cart',
      }
    ]
  },
  {
    title: 'Support',
    isShow: true,
    data: [
      {
        navOptionThumb: 'md-mail',
        navOptionName: 'Email',
        screenToNavigate: '',
      },
      {
        navOptionThumb: 'md-call',
        navOptionName: 'Call',
        screenToNavigate: '',
      }
    ]
  },
  {
    title: 'Other',
    isShow: true,
    data: [
      {
        navOptionThumb: 'md-share',
        navOptionName: 'Share',
        screenToNavigate: '',
      }
    ]
  }
];

export default function CustomDrawerContent({ progress, navigation, ...rest }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(_drawItem)
  }, [_drawItem])

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <View style={drawerContentStyles.sideMenuContainer}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        {/*Top Large Image */}
        <Text style={{ fontSize: 30, color: '#2f95dc' }}>Ecommerce</Text>
        <Text style={{ fontSize: 30, color: '#2f95dc' }}>Store</Text>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#FFFFFF',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {
            items.map((item, key) => {
              console.log('items ', key)
              if (item.isShow) {
                item.data.map((elem, i) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 10,
                      paddingBottom: 10,
                      backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                    }}
                    key={i}
                  >
                    <View>
                      <Text>{item}</Text>
                    </View>
                    <View style={{ marginRight: 10, marginLeft: 20 }}>
                      <Icon name={elem.navOptionThumb} size={25} color="#2f95dc" />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: global.currentScreenIndex === key ? '#2f95dc' : 'black',
                      }}
                      onPress={() => {
                        global.currentScreenIndex = key;
                        navigation.navigate(elem.screenToNavigate);
                      }}>
                      {elem.navOptionName}
                    </Text>
                  </View>
                ))
              }
            })
          }
        </View>
      </Animated.View>
    </View >
  );
}