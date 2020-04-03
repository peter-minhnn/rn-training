import React, { ReactElement } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { Icon } from 'native-base';

export const TabBarIcon = (props) => {
    console.log('TabBarIcon', props)
    const isFocused = props.focused;

    const onPress = () => {
        const event = props.navigation.emit({
            type: 'tabPress',
        });

        if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
        }
    };

    const onLongPress = () => {
        props.navigation.emit({
            type: 'tabLongPress',
        });
    };
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} onLongPress={onLongPress} style={{ height: '100%' }}>
            <Icon
                name={props.name}
                size={30}
                style={{ color: `${props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}`, marginTop: 10 }}
            />
        </TouchableOpacity>
    );
}

export const TabBarLabel = (props) => {
    console.log('TabBarLabel', props)
    const isFocused = props.focused;

    const onPress = () => {
        const event = props.navigation.emit({
            type: 'tabPress',
        });

        if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
        }
    };

    const onLongPress = () => {
        props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} onLongPress={onLongPress} style={{ height: '100%' }}>
            <Text style={{ color: `${props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}` }}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
}

export const MyTabBar = ({ state, descriptors, navigation, focused }) => {
    return (
        <View style={{ flexDirection: 'row', display: 'flex', height: 60, justifyContent: 'center', alignItems: 'center' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                console.log('MyTabBar', focused)
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center' }}
                        key={index}
                    >
                        <Icon
                            name={route.name === 'Home' ? 'home' : 'settings'}
                            size={30}
                            style={{ color: `${focused ? Colors.tabIconSelected : Colors.tabIconDefault}`, marginTop: 10 }}
                        />
                        <Text style={{ color: `${focused ? Colors.tabIconSelected : Colors.tabIconDefault}` }}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}