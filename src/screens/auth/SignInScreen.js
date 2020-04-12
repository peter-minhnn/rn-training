import React, { createRef, useEffect, useState, useLayoutEffect, useRef } from 'react';
import { View, Text, TextInput, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { authStyles } from '../../styles';
import {
    Container,
    Content,
    Form,
    Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { DotIndicator } from 'react-native-indicators';
import SignInBackGround from '../../assets/img/login_background.svg';

export default function SignInScreen(props) {
    const dispatch = useDispatch();
    const [payload, setPayload] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setButtonDisable] = useState(true);
    const [eye, setEyes] = useState(true)

    //Check input for disabled button sign in
    useEffect(() => {
        if (email !== '' && password !== '') {
            setButtonDisable(false);
        }
        else {
            setButtonDisable(true);
        }
    }, [disable, email, password])

    useEffect(() => {
        if (props.payload != undefined && props.payload.error !== '') {
            handleShowAlert(props.error);
        }
        return () => setPayload([])
    }, [props.payload])

    function handleSignIn() {
        let formDataUser = new FormData();
        formDataUser.append('loginname', email);
        formDataUser.append('password', password);
        dispatch(props.actions.SignInRequest(formDataUser))
    }

    function handleShowAlert(_msg) {
        // Works on both Android and iOS
        Alert.alert(
            'Warning',
            `${_msg}`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    function handleNavigateSignUpScreen() {
        props.navigation.navigate('SignUp');
    }

    function handleNavigateForgotPWScreen() {
        props.navigation.navigate('ForgotPW');
    }

    function handleShowOrHidePW() {
        setEyes(!eye);
    }

    return (
        <SafeAreaView style={authStyles.safeAreaView}>
            <Container style={authStyles.mainContent}>
                <SignInBackGround width='100%' height='100%' style={authStyles.imageBackgroundSvg} />
                <Content>
                    <View style={authStyles.titleView}>
                        <Text style={authStyles.title}>Ecommerce</Text>
                        <Text style={authStyles.title}>Store</Text>
                    </View>
                    <Form style={authStyles.formContainer}>
                        <View style={authStyles.inputTextBorder}>
                            <TextInput autoCompleteType='username' onChangeText={text => setEmail(text)} placeholder='Email address' placeholderTextColor='#606060' />
                        </View>
                        <View style={authStyles.inputTextBorder}>
                            <TextInput secureTextEntry={eye} onChangeText={password => setPassword(password)} placeholder='Password' placeholderTextColor='#606060' />
                            <TouchableOpacity activeOpacity={0.7} onPress={() => handleShowOrHidePW()}>
                                <Icon active name='eye-off' size={15} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => handleNavigateForgotPWScreen()}>
                            <View style={authStyles.paddingView}>
                                <Text style={authStyles.forgotPwText}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={authStyles.paddingView}>
                            <Button block onPress={handleSignIn} disabled={disable} style={{ backgroundColor: `${disable || props.loading ? '#797676' : '#2f95dc'}` }}>
                                {
                                    props.loading ?
                                        <DotIndicator color='#FFF' size={5} />
                                        :
                                        <Text style={authStyles.signInText}>SIGN IN</Text>
                                }
                            </Button>
                        </View>
                        <TouchableOpacity onPress={() => handleNavigateSignUpScreen()}>
                            <View style={authStyles.paddingView}>
                                <Text style={authStyles.signUpText}>New here? Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </Form>
                </Content>
                <View style={authStyles.skipLoginView}>
                    <Text style={{ color: '#2f95dc', fontSize: 18 }}>SKIP LOGIN </Text>
                    <Icon name='arrow-right' size={30} color='#2f95dc' />
                </View>
            </Container>
        </SafeAreaView >
    )
}
