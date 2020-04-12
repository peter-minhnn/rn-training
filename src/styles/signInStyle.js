import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    container: {
        position: 'relative'
    },
    imageBackgroundSvg: {
        position: 'absolute'
    },
    titleView: {
        marginTop: 25
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#2f95dc'
    },
    formContainer: {
        padding: 20,
        paddingTop: 80
    },
    inputTextBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#606060',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paddingView: {
        paddingTop: 10
    },
    forgotPwText: {
        textAlign: 'right',
        color: '#2f95dc'
    },
    signInText: {
        color: '#FFFFFF',
        fontSize: 18
    },
    signUpText: {
        textAlign: 'center',
        color: '#2f95dc'
    },
    skipLoginView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderTopColor: '#FFF',
        borderTopWidth: 1,
        height: 60
    }
});

export { authStyles };