import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignInScreen from '../../screens/auth/SignInScreen';
import * as authActions from '../../actions/authAction';
import HomeComp from './HomeComponent';
class SignInComp extends Component {
    render() {
        if(Object.keys(this.props.payload).length > 0 && this.props.payload.status === 1){
            return (
                <HomeComp />
            )
        }
        return (
            <SignInScreen
                navigation={this.props.navigation}
                loading={this.props.loading}
                payload={this.props.payload}
                error={this.props.error}
                actions={this.props.actions}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(authActions, dispatch)
})

const mapStateToProps = (state) => ({
    loading: state.authReducers.loading,
    payload: state.authReducers.payload,
    error: state.authReducers.error
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInComp);