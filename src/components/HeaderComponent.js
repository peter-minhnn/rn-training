import React, { useLayoutEffect, useContext, useMemo, useState, createContext, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    Header,
    Left,
    Body,
    Right,
    Button,
    Title,
} from 'native-base';
import { View, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const _navHeaderItems = ['Home', 'MyCart', 'Profile', 'MyOrders', 'Map', 'Setting'];

export default function HeaderComponent(props) {
    const [headerTitle, setTitle] = useState('');
    const [isMultipleIcon, setIsMultipleIcon] = useState(false);
    const opacity = 0.8;
    // Get a name of current screen
    const routeName = props.route != undefined ? props.route.name : 'Home';

    useLayoutEffect(() => {
        setTitle(routeName);
        (_navHeaderItems.indexOf(routeName) !== -1) ? setIsMultipleIcon(false) : setIsMultipleIcon(true)
        switch (routeName) {
            case 'MyCart':
                setTitle('My Cart');
                break;
            case 'MyOrders':
                setTitle('My Orders');
                break;
            case 'ProductDetail':
                setTitle('Product Detail');
                break;
            case 'Profile':
                setTitle('My Profile');
                break;
        }
    }, [isMultipleIcon, headerTitle])

    function handleToggleDrawer() {
        if (headerTitle === 'Home') {
            props.navigation.openDrawer();
        }
        else {
            props.navigation.goBack();
        }
    }

    function handleNavigateMyCart() {
        console.log('handleNavigateMyCart')
        props.navigation.navigate('MyCart');
    }

    function handleNavigateSearch() {
        props.navigation.navigate('Search');
    }

    return (
        <Header style={{ backgroundColor: '#2f95dc' }}>
            <Left style={{ flex: 1, padding: 0 }}>
                <TouchableOpacity activeOpacity={opacity} onPress={handleToggleDrawer} style={{ width: 50 }}>
                    <Icon name={headerTitle === 'Home' ? 'bars' : 'left'} size={20} color='#FFFFFF' />
                </TouchableOpacity>
            </Left>
            <Body style={{ flex: 0 }}>
                <Title>{headerTitle}</Title>
            </Body>
            <Right style={{ flex: 1, padding: -10 }}>
                {isMultipleIcon && headerTitle !== 'Home' ?
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity activeOpacity={opacity} onPress={handleNavigateSearch} style={{ width: 50 }}>
                            <Icon name='search1' size={20} color='#FFFFFF' />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={opacity} onPress={handleNavigateMyCart} style={{ width: 50 }}>
                            <Icon name='shoppingcart' size={20} color='#FFFFFF' />
                        </TouchableOpacity>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={opacity} onPress={handleNavigateMyCart}>
                        <Icon name='shoppingcart' size={20} color='#FFFFFF' />
                    </TouchableOpacity>
                }
            </Right>
        </Header>
    )
}
