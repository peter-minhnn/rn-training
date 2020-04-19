import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    Text,
    SafeAreaView,
    View,
    Alert,
    ScrollView,
    Dimensions,
    Animated,
    TouchableOpacity,
    Linking,
    StatusBar,
    Platform
} from 'react-native';
import { homeStyles } from '../../styles';
import { Container, Button, Input, Content, Thumbnail } from 'native-base';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent';
import { BallIndicator } from 'react-native-indicators';
import { selectSubcategories } from '../../selectors/homeSelector';
import * as types from '../../constants/ActionsType';
import { NetworkAndAppStateContext } from '../../components/NetworkProvider';
import Icon from 'react-native-vector-icons/AntDesign';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const context = NetworkAndAppStateContext;
    const [subcategories, setCategory] = useState([]);
    const [isConnected, setIsConnected] = useState(true);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        dispatch(props.getMenuStore())
    }, [])

    useEffect(() => {
        setIsLoading(props.loading);
        setCategory(props.payloadCategories);
        return () => setCategory([]);
    }, [props.payloadCategories])

    useEffect(() => {
        console.log([isLoading, isConnected])
        if (!isConnected && subcategories == undefined && !isLoading) {
            Alert.alert(
                'Announcement',
                'Your wifi or 3G cellular is off. Please turn it up!!!',
                [
                    {
                        text: "Later", onPress: () => console.log("Cancel Pressed"), style: "cancel"
                    },
                    {
                        text: 'Turn on',
                        onPress: () => {
                            Platform.OS === 'ios' ? Linking.openURL('app-settings:') : Linking.openSettings()
                        }
                    },
                ],
                { cancelable: false }
            )
        }
    }, [isConnected])

    function handleViewAll() {
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
        <NetworkAndAppStateContext.Consumer>
            {
                (value) => (
                    <SafeAreaView style={{ flex: 1 }}>
                        <ParallaxScrollView
                            backgroundColor='#FFF'
                            contentBackgroundColor="#FFF"
                            parallaxHeaderHeight={125}
                            //renderScrollComponent={() => <Animated.View />}
                            //renderScrollComponent={() => <AnimatedCustomScrollView />}
                            renderForeground={() => (
                                <>
                                    <HeaderComponent {...props} />
                                    <View style={homeStyles.searchBarContainer}>
                                        <View style={homeStyles.searchBarChild}>
                                            <Icon active name='search1' style={homeStyles.searchBarIcon} size={22} />
                                            <Input placeholder='Search for products...' />
                                        </View>
                                    </View>
                                </>
                            )}
                            renderStickyHeader={() => (
                                <View style={homeStyles.searchBarStickyHeader}>
                                    <View style={homeStyles.searchBarStickyChild}>
                                        <Icon active name='search1' style={homeStyles.searchBarStickyIcon} size={22} />
                                        <Input placeholder='Search for products...' />
                                    </View>
                                    <Button transparent style={homeStyles.searchBarCartIcon}>
                                        <Icon name='shoppingcart' size={25} color='#FFFFFF' />
                                    </Button>
                                </View>
                            )}
                            stickyHeaderHeight={70}
                            contentContainerStyle={homeStyles.contentContainer}
                        >
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
                                            : subcategories != undefined ?
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
                                                ) : setIsConnected(value.isConnected)
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ paddingBottom: 2, flex: 1 }}>
                                <View>
                                    <View style={homeStyles.headerCategory}>
                                        <Text style={{ fontSize: 25, color: '#2f95dc', fontWeight: 'bold', width: '60%' }} numberOfLines={1}>Electronics</Text>
                                        <Button block info onPress={handleViewAll} style={{ height: 30, marginTop: 4, width: '30%' }}>
                                            <Text style={{ color: '#FFFFFF' }}>View All</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flexDirection: 'column', paddingLeft: 5, paddingRight: 5 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }}>
                                                <View style={{
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    paddingTop: 15
                                                }}>
                                                    <Image source={require('../../assets/img/Fiorella_Purple_Peep_Toes_2.jpg')} style={homeStyles.imageMenu} />

                                                </View>
                                                <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                                    <Text style={homeStyles.itemText}>Xiao Mi A3</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={homeStyles.priceNew}>$222</Text>
                                                        <Text style={homeStyles.priceOld}>$250</Text>
                                                        <Text style={homeStyles.saleOff}>9% Off</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }}>
                                                <View style={{
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    paddingTop: 15
                                                }}>
                                                    <Image source={require('../../assets/img/Fiorella_Purple_Peep_Toes_2.jpg')} style={homeStyles.imageMenu} />

                                                </View>
                                                <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                                    <Text style={homeStyles.itemText}>Xiao Mi A3</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={homeStyles.priceNew}>$222</Text>
                                                        <Text style={homeStyles.priceOld}>$250</Text>
                                                        <Text style={homeStyles.saleOff}>9% Off</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }}>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                paddingTop: 15
                                            }}>
                                                <Image source={require('../../assets/img/Fiorella_Purple_Peep_Toes_2.jpg')} style={homeStyles.imageMenu} />

                                            </View>
                                            <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                                <Text style={homeStyles.itemText}>Xiao Mi A3</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={homeStyles.priceNew}>$222</Text>
                                                    <Text style={homeStyles.priceOld}>$250</Text>
                                                    <Text style={homeStyles.saleOff}>9% Off</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    <View style={homeStyles.headerCategory}>
                                        <Text style={{ fontSize: 25, color: '#2f95dc', fontWeight: 'bold', width: '60%' }} numberOfLines={1}>Electronics</Text>
                                        <Button block info onPress={handleViewAll} style={{ height: 30, marginTop: 4, width: '30%' }}>
                                            <Text style={{ color: '#FFFFFF' }}>View All</Text>
                                        </Button>
                                    </View>
                                    <View style={{ flexDirection: 'column', paddingLeft: 5, paddingRight: 5 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }}>
                                                <View style={{
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    paddingTop: 15
                                                }}>
                                                    <Image source={require('../../assets/img/Fiorella_Purple_Peep_Toes_2.jpg')} style={homeStyles.imageMenu} />

                                                </View>
                                                <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                                    <Text style={homeStyles.itemText}>Xiao Mi A3</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={homeStyles.priceNew}>$222</Text>
                                                        <Text style={homeStyles.priceOld}>$250</Text>
                                                        <Text style={homeStyles.saleOff}>9% Off</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }}>
                                                <View style={{
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    paddingTop: 15
                                                }}>
                                                    <Image source={require('../../assets/img/Fiorella_Purple_Peep_Toes_2.jpg')} style={homeStyles.imageMenu} />

                                                </View>
                                                <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                                    <Text style={homeStyles.itemText}>Xiao Mi A3</Text>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={homeStyles.priceNew}>$222</Text>
                                                        <Text style={homeStyles.priceOld}>$250</Text>
                                                        <Text style={homeStyles.saleOff}>9% Off</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }}>
                                            <View style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                paddingTop: 15
                                            }}>
                                                <Image source={require('../../assets/img/Fiorella_Purple_Peep_Toes_2.jpg')} style={homeStyles.imageMenu} />

                                            </View>
                                            <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                                <Text style={homeStyles.itemText}>Xiao Mi A3</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={homeStyles.priceNew}>$222</Text>
                                                    <Text style={homeStyles.priceOld}>$250</Text>
                                                    <Text style={homeStyles.saleOff}>9% Off</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ParallaxScrollView>
                    </SafeAreaView >
                )
            }
        </NetworkAndAppStateContext.Consumer>
    );
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

