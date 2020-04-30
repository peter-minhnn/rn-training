import React from 'react';
import { View, Text } from 'react-native';
import { productDetailStyles } from '../../styles';

export default function ProductDetailScreen(props) {
    return (
        <View style={productDetailStyles.container}>
            <Text>Product Detail Screen!</Text>
        </View>
    )
}