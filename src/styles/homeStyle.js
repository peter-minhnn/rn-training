import { StyleSheet, Dimensions, Platform } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        backgroundColor: '#FFF',
    },
    subCategories: {
        display: 'flex',
        flexDirection: 'column',
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerCategory: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    spinnerTextStyle: {
        color: '#FFF',
        fontSize: 14
    },
    searchBarContainer: {
        backgroundColor: '#2f95dc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    searchBarStickyHeader: {
        backgroundColor: '#2f95dc',
        flexDirection: 'row',        
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: Platform.OS === 'android' ? 5 : 1,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    searchBarChild: {
        width: '95%',
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row'
    },
    searchBarStickyChild: {
        width: '80%',
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row'
    },
    searchBarIcon: {
        width: '16%',
        paddingTop: 14,
        paddingLeft: 30
    },
    searchBarStickyIcon:{
        width: '16%',
        paddingTop: 14,
        paddingLeft: 20
    },
    searchBarCartIcon:{
        paddingRight: 20
    },
    divItem: {
        height: Dimensions.get('window').width / (1), // approximate a square
        flex: 1,
        elevation: 1
    },
    item: {
        backgroundColor: '#FFF',
        flexDirection: 'column',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / (2), // approximate a square
        borderRadius: 8,
        width: '49%',
        elevation: Platform.OS === 'android' ? 4 : 1,
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 1
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    saleOff: {
        paddingLeft: 5,
        color: '#2f95dc',
        fontSize: 14
    },
    priceNew: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    },
    priceOld: {
        paddingLeft: 5,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: '#000',
        fontSize: 14
    },
    imageMenu: {
        width: 120,
        height: 120
    }
});