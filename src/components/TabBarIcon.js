import * as React from 'react';
import Colors from '../constants/Colors';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function TabBarIcon(props) {
    return (
        <MaterialCommunityIcons
            name={props.name}
            size={props.size}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}
