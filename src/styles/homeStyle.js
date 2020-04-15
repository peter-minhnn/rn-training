import { StyleSheet, Dimensions } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        marginTop: 10,
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
        justifyContent: 'center'
    },
    searchBarChild: {
        width: '95%',
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
    divItem: {
        height: Dimensions.get('window').width / (1), // approximate a square
        flex: 1,
        elevation: 1
    },
    item: {
        backgroundColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / (2), // approximate a square
        borderRadius: 15,
        width: '49%'
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    itemText: {
        color: '#29A8DF',
        fontSize: 14,
        paddingTop: 3
    },
    imageMenu: {
        width: 100,
        height: 100
    }
});