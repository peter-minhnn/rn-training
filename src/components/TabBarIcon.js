import * as React from 'react';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
    return (
        <FontAwesome
            icon={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
