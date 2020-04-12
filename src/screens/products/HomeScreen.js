import React, { useState, useEffect, useMemo } from 'react';
import {
    Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
    Alert,
    ScrollView
} from 'react-native';
import ReactNativeIcon from '../../assets/img/react-native-icon.svg';
import { homeStyles } from '../../styles';
import {
    Container,
    Button,
    Icon,
    Title,
    Input,
    Content,
    Thumbnail
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';

export default function HomeScreen(props) {
    const { navigation } = props;
    const [loading, setLoading] = useState(false);
    const [subcategories, setCategory] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(props.actions.GetMenuRequest())
    }, [])

    useEffect(() => {
        setLoading(props.loading);

        return () => setLoading(false)
    }, [props.loading])

    useEffect(() => {
        console.log(subcategories)
        if (Object.keys(props.payload).length > 0 && props.payload != undefined) {
            setCategory(props.payload.subcategories)
        }
        return () => setCategory([])
    }, [props.payload])

    function handleFetchUser() {
        Alert.alert(
            'Warning',
            'Fetch User',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    return (
        <Container>
            <HeaderComponent {...props} />
            <Content>
                <ScrollView contentContainerStyle={homeStyles.container}>
                    <View style={homeStyles.searchBarContainer}>
                        <View style={homeStyles.searchBarChild}>
                            <Icon active name='ios-search' style={homeStyles.searchBarIcon} />
                            <Input placeholder='Search for products...' />
                        </View>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        contentContainerStyle={{ padding: 10 }}
                    >
                        {
                            subcategories.length > 0 ?
                            subcategories.map((object, index) =>
                                <View key={index} style={{ display: 'flex', flexDirection: 'column', width: 85, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ borderWidth: 1, borderRadius: 50 }} >
                                        <Thumbnail source={{ uri: `http:${object.thumb}` }} width={10} height={10} />
                                    </View>
                                    <Text style={{ fontSize: 12 }} numberOfLines={1}>{object.name}</Text>
                                </View>
                            ) : null
                        }
                    </ScrollView>
                    <View style={homeStyles.contentContainer}>
                        <View style={homeStyles.welcomeContainer}>
                            <Image
                                source={
                                    __DEV__
                                        ? require('../../assets/img/robot-dev.png')
                                        : require('../../assets/img/robot-prod.png')
                                }
                                style={homeStyles.welcomeImage}
                            />
                            <ReactNativeIcon width={100} height={50} />
                        </View>
                        <View>
                            <Text>Using Redux-saga with hooks **EXPERIMENTAL**</Text>
                            <Button block info onPress={handleFetchUser}>
                                <Text style={{ color: '#FFFFFF' }}>Fetch User</Text>
                            </Button>
                        </View>

                        <Spinner visible={loading} textContent={'Loading...'} textStyle={homeStyles.spinnerTextStyle} />
                    </View>
                </ScrollView>
            </Content>
        </Container>
    );
}



