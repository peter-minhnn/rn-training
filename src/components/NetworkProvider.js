import React, { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { AppState } from 'react-native';

export const NetworkAndAppStateContext = React.createContext({ isConnected: true, appState: AppState.currentState });

export default function NetworkProvider(props) {
    const [isConnected, setIsConnected] = useState(true);
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        AppState.addEventListener("change", _handleAppStateChange);
        return () => AppState.removeEventListener("change", _handleAppStateChange);
    }, []);


    useEffect(() => {
        // Subscribe
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("IP Address", state.details.ipAddress);
            console.log("Is connected?", state.isConnected);
            _handleConnectivityChange(state.isConnected);
        });

        // Unsubscribe
        unsubscribe();
    }, [])

    const _handleAppStateChange = nextAppState => {
        if (appState.match(/inactive|background/) && nextAppState === "active") {
            console.log("App has come to the foreground!");
        }
        setAppState(nextAppState);
    };

    const _handleConnectivityChange = isConnected => {
        setIsConnected(isConnected);
    }

    const params = { isConnected, appState };
    //console.log('params ', [isConnected, appState])
    return (
        <NetworkAndAppStateContext.Provider value={params}>
            {props.children}
        </NetworkAndAppStateContext.Provider>
    );
}