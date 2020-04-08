import { useLayoutEffect, useContext, useMemo, useState, createContext } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderContext = createContext(null);
const _navHeaderItems = [
    {
        headerTitle: 'Home',
        headerLeft: 'menu',
        headerRight: 'md-cart'
    },
    {
        headerTitle: 'Home',
        headerLeft: 'menu',
        headerRight: 'md-cart'
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