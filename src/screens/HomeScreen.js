import React, { useState } from 'react';
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

export default function HomeScreen() {
    const [count, setCount] = useState(0);
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
            </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};



