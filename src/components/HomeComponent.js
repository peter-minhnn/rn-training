import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import * as actions from '../actions';

class HomeScreenF extends Component {
    render() {
        return (
            <HomeScreen actions={this.props.actions} count={this.props.count} countdown={this.props.countdown}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions.homeActions, dispatch)
});

const mapStateToProps = (state) => ({
    count: state.homeReducer.count,
    countdown: state.homeReducer.countdown
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenF);