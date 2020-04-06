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
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Input,
    Content,
    Thumbnail
} from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux';

export default function HomeScreen(props) {
    const { navigation } = props;
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(props.actions.GetMenuRequest())
    }, [])

    useEffect(() => {
        setLoading(props.loading);
        return () => setLoading(false)
    }, [props.loading])

    useEffect(() => {
        setPayload(props.payload);
        return () => setPayload([])
    }, [props.payload])


    function handleToggleDrawer() {
        navigation.openDrawer();
    }

    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
        <Container>
            <Header style={{ backgroundColor: '#2f95dc' }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={handleToggleDrawer}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body style={{ flex: 0 }}>
                    <Title>Ecommerce Store</Title>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon name='md-cart' />
                    </Button>
                </Right>
            </Header>
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
                            payload.map((object, index) =>
                                <View key={index} style={{ display: 'flex', flexDirection: 'column', width: 85, justifyContent: 'center', alignItems: 'center' }}>
                                    <Thumbnail source={{ uri: `${object.image}` }} />
                                    <Text style={{ fontSize: 12 }}>{object.menuName}</Text>
                                </View>
                            )
                        }
                    </ScrollView>
                    <View style={homeStyles.contentContainer}>
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
                            <Text>Using Redux-saga with hooks **EXPERIMENTAL**</Text>
                            <Button block info>
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



