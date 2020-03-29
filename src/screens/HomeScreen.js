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

export default function HomeScreen() {
    const [count, setCount] = useState(0);
    const incInProgress = countdown > 0;

    function handleIncrement() {
        this.props.actions.Inc();
    }

    function handleDecrement() {
        this.props.actions.Dec();
    }

    function handleIncLaterClicked() {
        if (incInProgress) {
            dispatch({ type: "CANCEL_COUNTDOWN" });
        } else {
            dispatch({ type: "START_COUNTDOWN", countdown: 5 });
        }
    }

    return (
        <View style={homeStyles.container}>
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
                    <Text>Current count : {count}</Text>
                    <Button warning onPress={handleDecrement}>
                        <Text>Decrement</Text>
                    </Button>
                    <Button primary onPress={handleIncrement}>
                        <Text>Increment</Text>
                    </Button>
                    <Button danger onPress={handleIncLaterClicked}>
                        <Text>{incInProgress ? "Cancel future increment" : "Increment after 5s"}</Text>
                    </Button>
                    <Text style={{ display: incInProgress ? "block" : "none" }}>
                        {`Will increment after ${countdown}s...`}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};



