import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeScreen from '../../screens/products/HomeScreen';
import * as homeActions from '../../actions/homeAction';
class HomeComp extends Component {
    render() {
        return (
            <HomeScreen
                navigation={this.props.navigation}
                loading={this.props.loading}
                payload={this.props.payload}
                actions={this.props.actions}
                error={this.props.error}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
})

const mapStateToProps = (state) => ({
    loading: state.homeReducer.loading,
    payload: state.homeReducer.payload,
    error: state.homeReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComp);