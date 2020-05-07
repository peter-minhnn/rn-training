import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View, Alert, Linking, Platform
} from 'react-native'
import { homeStyles } from '../../../styles'
import { Input } from 'native-base'
import { useDispatch } from 'react-redux'
import HeaderComponent from '../../../components/HeaderComponent'
import { BallIndicator } from 'react-native-indicators'
import * as types from '../../../constants'
import { NetworkAndAppStateContext } from '../../../components/NetworkProvider'
import Icon from 'react-native-vector-icons/AntDesign'
import AndroidOpenSettings from 'react-native-android-open-settings'
import { useSelector } from 'react-redux'
import { selectAllSubcategories, selectProducts } from '../selectors/homeSelector'
import Categories from './Categories'
import Products from './Products'
import RefreshComponent from '../../../components/RefreshControl'

function HomeScreen(props) {
    const dispatch = useDispatch();
    const [isConnected, setIsConnected] = useState(true);
    const selectors = useSelector(state => selectAllSubcategories(state.homeReducer.payload));

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

    function _handleNetwork(isConnected) {
        setIsConnected(isConnected)
    }

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
                        {setIsConnected(value.isConnected)}
                        <SafeAreaView style={{ flex: 1 }}>
                            <RefreshComponent numStickyHeader={1} scrollEnabled={false}>
                                <HeaderComponent {...props} />
                                <View style={homeStyles.searchBarContainer}>
                                    <View style={homeStyles.searchBarChild}>
                                        <Icon active name='search1' style={homeStyles.searchBarIcon} size={22} />
                                        <Input placeholder='Search for products...' />
                                    </View>
                                </View>
                                {/* Categories component */}
                                <Categories categories={selectors} isConnected={isConnected} />
                                {/* Products component */}
                                <Products handleViewAll={_handleViewAll} isConnected={isConnected} datas={selectors}/>
                            </RefreshComponent>
                        </SafeAreaView >
                    </>
            }
        </NetworkAndAppStateContext.Consumer>
    );
}

export default HomeScreen;

