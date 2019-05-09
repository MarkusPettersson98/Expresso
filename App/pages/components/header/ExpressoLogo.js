import { Image } from 'react-native';
import React from 'react';

export default class ExpressoLogoHeader extends React.Component {
    render() {
        return (
                <Image
                    source={require('../resources/ExpressoWhite.png')}
                    style={{
                        resizeMode: 'contain',
                        width: '100%',
                        height: '40%',
                        marginTop: 5,
                    }}
                />
        );
    }
}
