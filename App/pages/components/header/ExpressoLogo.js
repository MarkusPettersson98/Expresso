import { Image, View } from 'react-native';
import React from 'react';

export default class ExpressoLogoHeader extends React.Component {
    render() {
        return (
            <View style= {{flex: 1, marginTop: 10, marginBottom:10, alignItems: 'center' }}>
                <Image
                    source={require('../resources/ExpressoWhite.png')}
                    style={{
                        flex: 1,
                        width: '50%',
                        height: '50%',            
                    }}
                />
            </View>
        );
    }
}
