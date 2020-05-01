import React, { useState, useEffect, useMemo } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { SkypeIndicator } from 'react-native-indicators';

export default function SpinnerOverLay({ loading }) {
    return (
        <Spinner visible={loading} overlayColor='rgba(0,0,0,0.3)' children={<SkypeIndicator color='#FFF' />} />
    )
}