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
import { View } from 'react-native';

const _navHeaderItems = ['Home', 'MyCart', 'Profile', 'MyOrders', 'Map', 'Setting'];

export default function HeaderComponent(props) {
    const [headerTitle, setTitle] = useState('');
    const [isMultipleIcon, setIsMultipleIcon] = useState(false);
    
    // Get a name of current screen
    const routeName = props.route != undefined ? props.route.name : 'Home';

    useLayoutEffect(() => {
        setTitle(routeName);
        (_navHeaderItems.indexOf(routeName) === -1) ? setIsMultipleIcon(false) : setIsMultipleIcon(true)
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
        props.navigation.navigate('MyCart');
    }

    function handleNavigateSearch() {
        props.navigation.navigate('Search');
    }

    return (
        <Header style={{ backgroundColor: '#2f95dc' }}>
            <Left style={{ flex: 1, padding: 0 }}>
                <Button transparent onPress={handleToggleDrawer}>
                    <Icon name={headerTitle === 'Home' ? 'bars' : 'arrowleft'} size={20} color='#FFFFFF' />
                </Button>
            </Left>
            <Body style={{ flex: 0 }}>
                <Title>{headerTitle}</Title>
            </Body>
            <Right style={{ flex: 1, padding: -10 }}>
                {isMultipleIcon && headerTitle !== 'Home' ?
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button transparent onPress={handleNavigateSearch}>
                            <Icon name='search1' size={20} color='#FFFFFF' />
                        </Button>
                        <Button transparent>
                            <Icon name='shoppingcart' size={20} color='#FFFFFF' />
                        </Button>
                    </View>
                    :
                    <Button transparent onPress={handleNavigateMyCart}>
                        <Icon name='shoppingcart' size={20} color='#FFFFFF' />
                    </Button>
                }
            </Right>
        </Header>
    )
}
