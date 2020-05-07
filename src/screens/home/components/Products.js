import React from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { homeStyles } from '../../../styles'
import { BallIndicator } from 'react-native-indicators'
import { Button, Input, Thumbnail } from 'native-base'
import HTML from 'react-native-render-html';
import HeaderComponent from '../../../components/HeaderComponent'
import Icon from 'react-native-vector-icons/AntDesign'

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ ...data, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};

const numColumns = 2;
export default function Products(props) {
    function renderItem({ item }) {
        console.log('renderItem',item)
        if (item.empty) {
            return <View style={[homeStyles.item, homeStyles.itemInvisible]}></View>
        }
        return (
            <>
                <View style={homeStyles.headerCategory}>
                    <HTML html={`<a style="font-size: 20px; font-weight: bold; color: 'rgb(47,149,220)'; width:100%; text-decoration: none;"> ${item.subcategories.name}</a>`} />
                    <Button block info onPress={props.handleViewAll} style={{ height: 30, marginTop: 4, width: '30%' }}>
                        <Text style={{ color: '#FFFFFF' }}>View All</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    {
                        item.products.map((obj, i) => (
                            <TouchableOpacity activeOpacity={0.9} style={homeStyles.item} onPress={() => { onPressItem() }} key={i}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingTop: 15
                                }}>
                                    <Image source={{ uri: `http:${obj.cell.thumb}` }} style={homeStyles.imageMenu} />
                                </View>
                                <View style={{ justifyContent: 'flex-end', padding: 5 }}>
                                    <Text style={homeStyles.itemText} numberOfLines={1}>{obj.cell.name}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={homeStyles.priceNew}>${obj.cell.price}</Text>
                                        {/* <Text style={homeStyles.priceOld}>$250</Text>
                                        <Text style={homeStyles.saleOff}>9% Off</Text> */}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', marginTop: 10 }}>
            {props.datas.length > 0 ?
                <FlatList
                    data={formatData(props.datas, numColumns)}
                    style={homeStyles.divItem}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    scrollEnabled={true}
                //keyExtractor={item => item.toString()}
                />
                :
                <View style={{ width: Dimensions.get('window').width, alignItems: 'center' }}>
                    <BallIndicator size={40} color='#2f95dc' />
                </View>
            }
        </View>
    )
}