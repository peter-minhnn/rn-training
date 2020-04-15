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

export default function RefreshComponent({ children, onRefreshActions }) {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        onRefreshActions();
        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);

    return (
        <ScrollView
            //contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {children}
        </ScrollView>
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
    },
});
