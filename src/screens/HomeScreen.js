import * as React from 'react';
import { Image, Platform, homeStylesheet, Text, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import ReactNativeIcon from '../assets/img/react-native-icon.svg';
import { homeStyles } from '../styles';

export default function HomeScreen() {
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

                <View style={homeStyles.getStartedContainer}>
                    <DevelopmentModeNotice />

                    <Text style={homeStyles.getStartedText}>Open up the code for this screen: </Text>

                    <View style={[homeStyles.codeHighlightContainer, homeStyles.homeScreenFilename]}>
                        <MonoText>screens/HomeScreen.js</MonoText>
                    </View>

                    <Text style={homeStyles.getStartedText}>
                        Change any of the text, save the file, and your app will automatically reload.
          </Text>
                </View>

                <View style={homeStyles.helpContainer}>
                    <TouchableOpacity onPress={handleHelpPress} style={homeStyles.helpLink}>
                        <Text style={homeStyles.helpLinkText}>Help, it didn’t automatically reload!</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={homeStyles.tabBarInfoContainer}>
                <Text style={homeStyles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

                <View style={[homeStyles.codeHighlightContainer, homeStyles.navigationFilename]}>
                    <MonoText style={homeStyles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
                </View>
            </View>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};

function DevelopmentModeNotice() {
    if (__DEV__) {
        const learnMoreButton = (
            <Text onPress={handleLearnMorePress} style={homeStyles.helpLinkText}>
                Learn more
            </Text>
        );

        return (
            <Text style={homeStyles.developmentModeText}>
                Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
            </Text>
        );
    } else {
        return (
            <Text style={homeStyles.developmentModeText}>
                You are not in development mode: your app will run at full speed.
            </Text>
        );
    }
}

function handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
    WebBrowser.openBrowserAsync(
        'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
    );
}


