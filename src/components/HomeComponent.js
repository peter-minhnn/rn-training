import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import * as homeActions from '../actions/homeAction';

function HomeScreenF() {
    return (
        <HomeScreen />
    )
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
});

const mapStateToProps = (state) => ({
    loading: state.homeReducer.loading,
    payload: state.homeReducer.payload,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenF);