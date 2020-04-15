import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Image, Text, SafeAreaView, View, Alert, ScrollView } from 'react-native';
import ReactNativeIcon from '../../assets/img/react-native-icon.svg';
import { homeStyles } from '../../styles';
import { Container, Button, Input, Content, Thumbnail } from 'native-base';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';
import { DotIndicator } from 'react-native-indicators';
import RefreshComponent from '../../components/RefreshControl';
import { selectSubcategories } from '../../selectors/homeSelector';
import * as types from '../../constants/ActionsType';
import { NetworkAndAppStateContext } from '../../components/NetworkProvider';
import Icon from 'react-native-vector-icons/AntDesign';

function HomeScreen(props) {
    const { navigation } = props;
    const [subcategories, setCategory] = useState([]);
    const dispatch = useDispatch();
    const context = NetworkAndAppStateContext;

    useEffect(() => {
        dispatch(props.getMenuStore())
    }, [])

    useEffect(() => {
        setCategory(props.payloadCategories);
        return () => setCategory([]);
    }, [props.payloadCategories])

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
    if (!context._currentValue.isConnected) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent {...props} />
                <View style={homeStyles.searchBarContainer}>
                    <View style={homeStyles.searchBarChild}>
                        <Icon active name='search1' style={homeStyles.searchBarIcon} size={22}/>
                        <Input placeholder='Search for products...' />
                    </View>
                </View>
                <Container>
                    <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Network request error!</Text>
                        <Button iconLeft block warning style={{ padding: 30, alignSelf: 'center', marginTop: 10 }}>
                            <Icon name='sync' color='#FFF' />
                            <Text style={{ color: '#FFF' }}> Try again</Text>
                        </Button>
                    </Content>
                </Container>
            </SafeAreaView>
        )
    }
    else {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent {...props} />
                <RefreshComponent onRefreshActions={props.getMenuStore}>
                    <View style={homeStyles.searchBarContainer}>
                        <View style={homeStyles.searchBarChild}>
                            <Icon active name='search1' style={homeStyles.searchBarIcon} size={22}/>
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
                            props.loading ?
                                <DotIndicator size={40} color='#2f95dc' /> :
                                subcategories.map((object, index) =>
                                    <View key={index} style={{ display: 'flex', flexDirection: 'column', width: 85, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ borderWidth: 1, borderRadius: 50 }} >
                                            <Thumbnail source={{ uri: `http:${object.thumb}` }} width={10} height={10} />
                                        </View>
                                        <Text style={{ fontSize: 12 }} numberOfLines={1}>{object.name}</Text>
                                    </View>
                                )
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
                        {/* <SpinnerOverLay loading={props.loading} /> */}
                    </View>
                </RefreshComponent>
            </SafeAreaView>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getMenuStore: () => dispatch({ type: types.GET_MENU_REQUEST })
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.homeReducer.loading,
        payloadCategories: selectSubcategories(state.homeReducer.payloadCategories),
        error: state.homeReducer.error,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

