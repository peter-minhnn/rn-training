import { useLayoutEffect, useContext, useMemo, useState, createContext } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderContext = createContext(null);
const _navHeaderItems = [
    {
        typeScreen: 1,
        data: [
            
        ]
    },
    {
        headerTitle: 'Home',
        headerLeft: 'menu',
        headerRight: 'md-cart'
    },
    {
        headerTitle: 'Category',
        headerLeft: 'arrowleft',
        headerRight: ['search1', 'shoppingcart']
    },
    {
        headerTitle: 'Product Detail',
        headerLeft: 'arrowleft',
        headerRight: ['search1', 'shoppingcart']
    },
    {
        headerTitle: 'My Cart',
        headerLeft: 'arrowleft',
        headerRight: ''
    },
    {
        headerTitle: 'Search',
        headerLeft: 'arrowleft',
        headerRight: 'shoppingcart'
    },
    {
        headerTitle: 'Setting',
        headerLeft: 'arrowleft',
        headerRight: 'shoppingcart'
    },
    {
        headerTitle: 'Profile',
        headerLeft: 'arrowleft',
        headerRight: 'shoppingcart'
    },
];

export default function HeaderComponent({ navigtion, route }) {
    const [headerTitle, setTitle] = useState('');
    const [headerLeft, setHeaderLeft] = useState(null);
    const [headerRight, setHeaderRight] = useState(null);

    return (
        <HeaderContext.Provider>
            <Header style={{ backgroundColor: '#2f95dc' }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={handleToggleDrawer}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body style={{ flex: 0 }}>
                    <Title>{headerTitle}</Title>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon name='md-cart' />
                    </Button>
                </Right>
            </Header>
        </HeaderContext.Provider>
    )
}