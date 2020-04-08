import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { drawerContentStyles } from '../styles'
import { Icon } from 'native-base';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
const _navItem = [
  {
    title: 'My Account',
    isShow: true,
    data: [
      {
        navOptionThumb: 'ios-person',
        navOptionName: 'My Profile',
        screenToNavigate: 'Profile',
      },
      {
        navOptionThumb: 'ios-heart',
        navOptionName: 'My Wish List',
        screenToNavigate: 'WishList',
      },
      {
        navOptionThumb: 'ios-cart',
        navOptionName: 'My Cart',
        screenToNavigate: 'Cart',
      },
      {
        navOptionThumb: 'md-cart',
        navOptionName: 'My Orders',
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
    setItems(_navItem)
  }, [_navItem])

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, -8],
  });

  return (
    <View style={drawerContentStyles.sideMenuContainer}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        {/*Top Large Image */}
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontSize: 30, color: '#2f95dc', fontWeight: 'bold' }}>Ecommerce</Text>
          <Text style={{ fontSize: 30, color: '#2f95dc', fontWeight: 'bold' }}>Store</Text>
        </View>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            marginTop: 30,
            borderTopWidth: 1,
            borderTopColor: '#2f95dc',
            width: Math.min(height, width) * 0.77,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <ScrollView contentContainerStyle={{ display: 'flex', flex: 1, justifyContent: 'space-evenly', flexDirection: 'column' }}>
          {
            items.map((item, key) => (
              <View key={key} style={[key === 2 ? '' : { borderBottomColor: '#CCC', borderBottomWidth: 1 }]}>
                <Text style={{
                  fontSize: 14,
                  color: '#5f6368',
                  paddingLeft: 20
                }}>{item.title}</Text>
                {
                  item.data.map((subItem, i) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: 10,
                        paddingBottom: 10,
                        backgroundColor: '#ffffff'
                      }}
                      key={i}
                    >

                      <View style={{ marginRight: 10, marginLeft: 20 }}>
                        <Icon name={subItem.navOptionThumb} size={25} style={{ color: '#2f95dc' }} />
                      </View>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#000000',
                        }}
                        onPress={() => { navigation.navigate(subItem.screenToNavigate); }}>
                        {subItem.navOptionName}
                      </Text>
                    </View>
                  ))
                }
              </View>
            ))
          }
        </ScrollView>
      </Animated.View>
    </View >
  );
}