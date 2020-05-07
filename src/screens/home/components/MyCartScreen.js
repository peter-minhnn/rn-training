import React from 'react';
import { View, Text } from 'react-native';
import { myCartStyles } from '../../../styles';
import { Container } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';

export default function MyCartScreen(props) {
    return (
        <Container>
            <HeaderComponent {...props} />
            <View style={myCartStyles.container}>
                <Text>My Cart Screen!</Text>
            </View>
        </Container>
    )
}