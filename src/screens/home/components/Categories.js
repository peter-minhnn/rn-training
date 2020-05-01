import React, { useState } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { homeStyles } from '../../../../styles'
import { BallIndicator } from 'react-native-indicators'
import { Thumbnail } from 'native-base'

export default function Categories(props) {
    const [wait, setWaiting] = useState(0);
    return (
        <View style={{ height: 100 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                contentContainerStyle={{ padding: 10, backgroundColor: '#FFF', marginTop: 2 }}
            >
                {
                    props.categories == undefined || props.categories.length === 0 && props.isConnected ?
                        <View style={{ width: Dimensions.get('window').width }}>
                            <BallIndicator size={40} color='#2f95dc' style={{ marginRight: 30 }} />
                        </View>
                        : props.categories.length > 0 && props.isConnected ?
                            props.categories.map((object, index) =>
                                <View key={index} style={homeStyles.categories}>
                                    <View style={{ borderWidth: 1, borderRadius: 50 }} >
                                        <Thumbnail source={{ uri: `http:${object.thumb}` }} width={10} height={10} />
                                    </View>
                                    <Text style={{ fontSize: 12 }} numberOfLines={1}>{object.name}</Text>
                                </View>
                            ) :
                            <View style={{ width: Dimensions.get('window').width }}>
                                <BallIndicator size={40} color='#2f95dc' style={{ marginRight: 30 }} />
                            </View>
                }
            </ScrollView>
        </View>
    )
}