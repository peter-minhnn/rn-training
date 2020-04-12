import React from 'react';
import { View, Text } from 'react-native';
import { profileStyles } from '../../styles';
import { Container } from 'native-base';
import HeaderComponent from '../../components/HeaderComponent';

export default function ProfileScreen(props) {
    return (
        <Container>
            <HeaderComponent {...props} />
            <View style={profileStyles.container}>
                <Text>Profile Screen!</Text>
            </View>
        </Container>
    )
}