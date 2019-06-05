import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';

import anim from '../resources/loading-coffee.json';

export default class LoadingCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.animation.play();
        // Or set a specific startFrame and endFrame with:
        this.animation.play(0, 120);
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    source={anim}
                    ref={animation => {
                      this.animation = animation;
                    }}
                    speed={1.5}
                    loop={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieView: {
        width: '100%',
        height: 250,
        marginTop: -80,
    },
});
