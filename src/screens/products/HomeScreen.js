import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Image, Text, SafeAreaView, View, Alert, ScrollView, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { homeStyles } from '../../styles';
import { Container, Button, Input, Content, Thumbnail } from 'native-base';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';
import { BallIndicator } from 'react-native-indicators';
import RefreshComponent from '../../components/RefreshControl';
import { selectSubcategories } from '../../selectors/homeSelector';
import * as types from '../../constants/ActionsType';
import { NetworkAndAppStateContext } from '../../components/NetworkProvider';
import Icon from 'react-native-vector-icons/AntDesign';

const dashboard = [
    {
        key: 2,
        source: 'ic_qrcode',
        name: 'test 1'
    },
    {
        key: 3,
        source: 'ic_history_menu_home',
        name: 'test 1'
    },
    {
        key: 4,
        source: 'ic_public_menu_home',
        name: 'test 1'
    }
];

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};

const numColumns = 2;

function HomeScreen(props) {
    const { navigation } = props;
    const dispatch = useDispatch();
    const context = NetworkAndAppStateContext;
    const [subcategories, setCategory] = useState([]);
    const [itemsList, setItemList] = useState(dashboard);

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

    function renderItem({ item }) {
        if (item.empty) {
            return <View style={[homeStyles.item, homeStyles.itemInvisible]}></View>
        }
        return (
            <TouchableOpacity key={item.index} style={homeStyles.item} onPress={() => { onPressItem(item.index) }}>
                <Image source={{ uri: `${item.source}` }} style={homeStyles.imageMenu} />
                <Text style={homeStyles.itemText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    function onPressItem() {

    }

    if (!context._currentValue.isConnected) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent {...props} />
                <View style={homeStyles.searchBarContainer}>
                    <View style={homeStyles.searchBarChild}>
                        <Icon active name='search1' style={homeStyles.searchBarIcon} size={22} />
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
                {/* <RefreshComponent onRefreshActions={props.getMenuStore}> */}
                <View style={homeStyles.searchBarContainer}>
                    <View style={homeStyles.searchBarChild}>
                        <Icon active name='search1' style={homeStyles.searchBarIcon} size={22} />
                        <Input placeholder='Search for products...' />
                    </View>
                </View>
                <View style={{ height: 100 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        decelerationRate="fast"
                        contentContainerStyle={{
                            padding: 10,
                            backgroundColor: '#FFF',
                            marginTop: 2
                        }}
                    >
                        {
                            props.loading ?
                                <View style={{ width: Dimensions.get('window').width }}>
                                    <BallIndicator size={40} color='#2f95dc' style={{ marginRight: 30 }} />
                                </View>
                                :
                                subcategories.map((object, index) =>
                                    <View key={index} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: 85,
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <View style={{ borderWidth: 1, borderRadius: 50 }} >
                                            <Thumbnail source={{ uri: `http:${object.thumb}` }} width={10} height={10} />
                                        </View>
                                        <Text style={{ fontSize: 12 }} numberOfLines={1}>{object.name}</Text>
                                    </View>
                                )
                        }
                    </ScrollView>
                </View>
                <View style={{ flex: 1, paddingBottom: 2 }}>
                    <ScrollView
                        contentContainerStyle={homeStyles.contentContainer}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    >
                        <View>
                            <View style={homeStyles.headerCategory}>
                                <Text style={{ fontSize: 25, color: '#2f95dc', fontWeight: 'bold' }}>Electronics</Text>
                                <Button block info onPress={handleFetchUser} style={{ height: 30, marginTop: 2, width: '30%' }}>
                                    <Text style={{ color: '#FFFFFF' }}>View All</Text>
                                </Button>

                            </View>
                            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
                                <TouchableOpacity style={homeStyles.item} onPress={() => { onPressItem() }}>
                                    <Image source={require('../../assets/img/robot-dev.png')} style={homeStyles.imageMenu} />
                                    <Text style={homeStyles.itemText}>Image 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={homeStyles.item} onPress={() => { onPressItem() }}>
                                    <Image source={require('../../assets/img/menu_cloth.jpg')} style={homeStyles.imageMenu} />
                                    <Text style={homeStyles.itemText}>Image 1</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={homeStyles.headerCategory}>
                                <Text style={{ fontSize: 25, color: '#2f95dc', fontWeight: 'bold' }}>Electronics</Text>
                                <Button block info onPress={handleFetchUser} style={{ height: 30, marginTop: 2, width: '30%' }}>
                                    <Text style={{ color: '#FFFFFF' }}>View All</Text>
                                </Button>
                            </View>
                            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
                                <TouchableOpacity style={homeStyles.item} onPress={() => { onPressItem() }}>
                                    <Image source={require('../../assets/img/menu_cloth.jpg')} style={homeStyles.imageMenu} />
                                    <Text style={homeStyles.itemText}>Image 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={homeStyles.item} onPress={() => { onPressItem() }}>
                                    <Image source={require('../../assets/img/menu_cloth.jpg')} style={homeStyles.imageMenu} />
                                    <Text style={homeStyles.itemText}>Image 1</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={homeStyles.headerCategory}>
                                <Text style={{ fontSize: 25, color: '#2f95dc', fontWeight: 'bold' }}>Electronics</Text>
                                <Button block info onPress={handleFetchUser} style={{ height: 30, marginTop: 2, width: '30%' }}>
                                    <Text style={{ color: '#FFFFFF' }}>View All</Text>
                                </Button>
                            </View>
                            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 5 }}>
                                <TouchableOpacity style={homeStyles.item} onPress={() => { onPressItem() }}>
                                    <Image source={require('../../assets/img/menu_cloth.jpg')} style={homeStyles.imageMenu} />
                                    <Text style={homeStyles.itemText}>Image 1</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={homeStyles.item} onPress={() => { onPressItem() }}>
                                    <Image source={require('../../assets/img/menu_cloth.jpg')} style={homeStyles.imageMenu} />
                                    <Text style={homeStyles.itemText}>Image 1</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* </RefreshComponent> */}
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

