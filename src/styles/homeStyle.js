import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
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
        paddingTop: 10, 
        paddingLeft: 30
    }
});