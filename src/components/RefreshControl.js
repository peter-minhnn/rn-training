import React, { useEffect } from 'react';
import {
    ScrollView,
    RefreshControl,
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native';
//import Constants from 'expo-constants';
import { useDispatch } from 'react-redux';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function RefreshComponent({ children, onRefreshActions }) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        onRefreshActions();
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                //contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
