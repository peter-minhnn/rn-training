import * as React from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import Colors from '../constants/Colors';
import { Icon } from 'native-base';

export default function TabBarIcon(props) {
    console.log(props)
    return (
        <Icon
        android={props.name}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
