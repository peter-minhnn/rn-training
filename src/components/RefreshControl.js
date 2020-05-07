import React, { useEffect } from 'react';
import {
    ScrollView,
    RefreshControl,
    StyleSheet
} from 'react-native';

function wait(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

export default function RefreshComponent({ children, onRefreshActions, numStickyHeader, scrollEnabled }) {
    const [refreshing, setRefreshing] = React.useState(false);

    const handleActions = () => Promise.all(onRefreshActions);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        handleActions();
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);
   
    return (
        <ScrollView
            stickyHeaderIndices={numStickyHeader !== null ? [numStickyHeader] : null}
            // refreshControl={
            //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
            scrollEventThrottle={200}
            scrollEnabled={scrollEnabled}
        >
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
    },
});
