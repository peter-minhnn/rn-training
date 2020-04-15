import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, Alert, ScrollView } from 'react-native';
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import HeaderComponent from '../../components/HeaderComponent';

export default function SettingScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Container>
            <HeaderComponent {...props} />
            <Content>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active name="airplane" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Airplane Mode</Text>
                    </Body>
                    <Right>
                        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled} />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="wifi" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Wi-Fi</Text>
                    </Body>
                    <Right>
                        <Text>GeekyAnts</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#007AFF" }}>
                            <Icon active name="bluetooth" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Bluetooth</Text>
                    </Body>
                    <Right>
                        <Text>On</Text>
                        <Icon active name="arrow-forward" />
                    </Right>
                </ListItem>
            </Content>
        </Container>
    )
}