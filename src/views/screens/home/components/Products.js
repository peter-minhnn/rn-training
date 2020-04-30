import React from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { homeStyles } from '../../../../styles'
import { BallIndicator } from 'react-native-indicators'

export default function Products(props) {
    return (
        <View style={{ paddingBottom: 2, flex: 1, backgroundColor: '#FFF', marginTop: 10 }}>
            <View style={homeStyles.headerCategory}>
                <Text style={{ fontSize: 25, color: '#2f95dc', fontWeight: 'bold', width: '60%' }} numberOfLines={1}>Electronics</Text>
                <Button block info onPress={_handleViewAll} style={{ height: 30, marginTop: 4, width: '30%' }}>
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
    )
}