import { Component } from 'react'
import { Alert, View, Text, SafeAreaView } from 'react-native'

class Dialog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {
                    Alert.alert(
                        this.props.title,
                        this.props.content,
                        this.props.isConfirm ?
                            [
                                {
                                    text: this.props.btnCancelText, onPress: () => { this.props.onPressBtnCancel }, style: "cancel"
                                },
                                {
                                    text: this.props.btnOkText,
                                    onPress: () => { this.props.onPressBtnOk }
                                },
                            ]
                            :
                            [
                                {
                                    text: this.props.btnOkText,
                                    onPress: () => { this.props.onPressBtnOk }
                                },
                            ],
                        { cancelable: false }
                    )
                }
            </SafeAreaView>
        )
    }
}

export default Dialog;