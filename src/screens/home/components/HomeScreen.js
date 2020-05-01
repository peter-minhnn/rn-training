import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import {
    Image, Text, SafeAreaView,
    View, Alert, ScrollView,
    Dimensions, Animated, TouchableOpacity,
    Linking, StatusBar, Platform
} from 'react-native'
import { homeStyles } from '../../../../styles'
import { Button, Input, Thumbnail } from 'native-base'
import { useDispatch } from 'react-redux'
import HeaderComponent from '../../generalComponents/HeaderComponent'
import { BallIndicator } from 'react-native-indicators'
import * as types from '../../constants/ActionsType'
import { NetworkAndAppStateContext } from '../../generalComponents/NetworkProvider'
import Icon from 'react-native-vector-icons/AntDesign'
import AndroidOpenSettings from 'react-native-android-open-settings'
import { useSelector, shallowEqual } from 'react-redux'
import { selectSubcategories } from '../../selectors/homeSelector'
import Categories from './Categories'
import Products from './Products'

function HomeScreen(props) {
    const dispatch = useDispatch();
    const [subcategories, setCategory] = useState([]);
    const [isConnected, setIsConnected] = useState(true);
    const selectSubCategories = useSelector(selectSubcategories);

    useEffect(() => {
        dispatch({ type: types.GET_MENU_REQUEST })
    }, [])

    useEffect(() => {
        if (!isConnected) {
            Alert.alert(
                'Announcement',
                'Your wifi or 3G cellular is off. Please turn it up!!!',
                [
                    {
                        text: "Later", onPress: () => console.log("Cancel Pressed"), style: "cancel"
                    },
                    {
                        text: 'Turn on',
                        onPress: () => {
                            Platform.OS === 'ios' ? Linking.openURL('app-settings:') : AndroidOpenSettings.wifiSettings()
                        }
                    },
                ],
                { cancelable: false }
            )
        }
        else {
            dispatch({ type: types.GET_MENU_REQUEST })
        }
    }, [isConnected])

    function _handleViewAll() {
        Alert.alert(
            'Warning',
            'Fetch User',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    return (
        <NetworkAndAppStateContext.Consumer>
            {
                (value) =>
                    <>
                        <SafeAreaView style={{ flex: 1 }}>
                            <ScrollView stickyHeaderIndices={[1]} scrollEventThrottle={200}>
                                <HeaderComponent {...props} />
                                <View style={homeStyles.searchBarContainer}>
                                    <View style={homeStyles.searchBarChild}>
                                        <Icon active name='search1' style={homeStyles.searchBarIcon} size={22} />
                                        <Input placeholder='Search for products...' />
                                    </View>
                                </View>
                                {/* Categories component */}
                                <Categories categories={selectSubCategories} isConnected={isConnected} />
                                {/* Products component */}
                                <Products />
                            </ScrollView>
                        </SafeAreaView >
                    </>
            }
        </NetworkAndAppStateContext.Consumer>
    );
}

export default HomeScreen;

