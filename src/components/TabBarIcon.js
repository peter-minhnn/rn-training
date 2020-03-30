import * as React from 'react';
import Colors from '../constants/Colors';
import { Icon } from 'native-base';

export default function TabBarIcon(props) {
    return (
        <Icon
            name={props.name}
            size={30}
            style={{marginTop: 40}}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
