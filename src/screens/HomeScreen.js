import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
    Alert,
    ScrollView
} from 'react-native';
import ReactNativeIcon from '../assets/img/react-native-icon.svg';
import { homeStyles } from '../styles';
import { Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default function HomeScreen() {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(null);
    // useEffect(() => {
    //     setLoading(this.props.loading);
    // }, [])

    // useEffect(() => {
    //     setPayload(this.props.payload);
    // }, [])

    function handleFetchUser() {
        this.props.actions.GetUserRequest();
    }

    return (
        <View style={homeStyles.container}>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={homeStyles.spinnerTextStyle}
            />
            <ScrollView style={homeStyles.container} contentContainerStyle={homeStyles.contentContainer}>
                <View style={homeStyles.welcomeContainer}>
                    <Image
                        source={
                            __DEV__
                                ? require('../assets/img/robot-dev.png')
                                : require('../assets/img/robot-prod.png')
                        }
                        style={homeStyles.welcomeImage}
                    />
                    <ReactNativeIcon width={100} height={50} />
                </View>
                <View>
                    <Text style={{ padding: 10 }}>Using Redux-saga with hooks **EXPERIMENTAL**</Text>
                    {/* {
                        payload.map((o, i) => {
                            <View key={i}>
                                <Text>{o.data.email}</Text>
                            </View>
                        })
                    } */}
                    <Button warning onPress={handleFetchUser}>
                        <Text>Fetch User</Text>
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}



