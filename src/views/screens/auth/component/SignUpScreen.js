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
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disable, setButtonDisable] = useState(true);

    //Check input for disabled button sign in
    useEffect(() => {
        if (email !== '' && password !== '' && fullname !== '' && confirmPassword === password) {
            setButtonDisable(false);
        }
        else {
            setButtonDisable(true);
        }
    }, [disable, email, password, fullname, confirmPassword])

    useEffect(() => {
        setPayload(props.payload);

        if (payload.status === 1) {
            return props.navigation.navigate('App', { screen: 'Home' });
        }
        else if (payload.status === 0) {
            handleShowAlert(payload.error);
        }

        if (props.error !== '') {
            handleShowAlert(props.error);
        }

        return () => setPayload([])
    }, [props.payload, props.error])

    function handleSignUp() {
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

    function handleNavigateSignInScreen() {
        props.navigation.navigate('SignIn');
    }

    return (
        <SafeAreaView style={authStyles.safeAreaView}>
            <SignInBackGround width='100%' height='100%' style={authStyles.imageBackgroundSvg} />
            <Container style={authStyles.mainContent}>
                <View style={{ paddingLeft: 10 }}>
                    <Button>
                        <Icon name='arrowleft' size={30}/>
                    </Button>
                </View>
                <Content>
                    <View style={authStyles.titleView}>
                        <Text style={authStyles.title}>Ecommerce</Text>
                        <Text style={authStyles.title}>Store</Text>
                    </View>
                    <Form style={authStyles.formContainer}>
                        <View style={authStyles.inputTextBorder}>
                            <TextInput autoCompleteType='fullname' onChangeText={text => setFullName(text)} placeholder='Email address' placeholderTextColor='#606060' />
                        </View>
                        <View style={authStyles.inputTextBorder}>
                            <TextInput autoCompleteType='email' onChangeText={text => setEmail(text)} placeholder='Email address' placeholderTextColor='#606060' />
                        </View>
                        <View style={authStyles.inputTextBorder}>
                            <TextInput secureTextEntry={true} onChangeText={password => setPassword(password)} placeholder='Password' placeholderTextColor='#606060' />
                        </View>
                        <View style={authStyles.inputTextBorder}>
                            <TextInput secureTextEntry={true} onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} placeholder='Password' placeholderTextColor='#606060' />
                        </View>
                        <View style={authStyles.paddingView}>
                            <Button block onPress={handleSignUp} disabled={disable} style={{ backgroundColor: `${disable || props.loading ? '#797676' : '#2f95dc'}` }}>
                                {
                                    props.loading ?
                                        <DotIndicator color='#FFF' size={5} />
                                        :
                                        <Text style={authStyles.signInText}>SIGN UP</Text>
                                }
                            </Button>
                        </View>
                        <TouchableOpacity onPress={() => handleNavigateSignInScreen()}>
                            <View style={authStyles.paddingView}>
                                <Text style={authStyles.signUpText}>Already have account? Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </Form>
                </Content>
            </Container>
        </SafeAreaView >
    )
}
