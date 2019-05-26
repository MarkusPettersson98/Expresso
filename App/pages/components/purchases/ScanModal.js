import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';

export default class ScanModal extends Component {
    constructor(props) {
        super(props);
    }

    onClose = () => {
        this.props.hideModal();
    };

    componentDidUpdate() {
      if (this.props.isVisible) {
        console.log("playing animation");
        this.animation.play();
      }
    }

    render() {
        return (
            <Modal style={styles.modal} isVisible={this.props.isVisible}>
                <View style={styles.modalContainer}>
                    <LottieView
                      style={styles.lottieView}
                      ref={animation => {
                        this.animation = animation;
                      }}
                      source={require('../resources/coffeeAnim.json')}
                      speed={1.5}
                    />
                    <Text style={styles.thank_you}>Bra scannat!</Text>
                    <Text style={styles.press_text}>
                        Njut av din kaffe. Vi ses snart igen!
                    </Text>

                    <TouchableOpacity
                      style={styles.btn}
                      onPress={this.onClose}
                    >
                      <Text style={styles.btnText}>STÄNG</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    lottieView: {
      width: '100%',
      height: 250,
      marginTop: -80,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        width: '100%',
        backgroundColor: '#F5FCFF',
        paddingTop: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 0,
    },
    thank_you: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7C6A70',
        marginTop: -5,
    },
    press_text: {
        fontSize: 17,
        textAlign: 'center',
        color: '#7C6A70',
        marginTop: 0,
    },
    logIn: {
      backgroundColor: '#5AA3B7',
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 15,
    },
    logInText: {
      color: 'white',
      fontWeight: '700',
      letterSpacing: 2,
    },
    btn: {
      width: '90%',
      backgroundColor: '#5AA3B7',
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 120,
      marginBottom: 0,
    },
    btnText: {
      color: 'white',
      fontWeight: '700',
      letterSpacing: 2,
    },
});
