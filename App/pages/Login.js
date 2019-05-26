import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet,
    Alert,
    Image,
    KeyboardAvoidingView,
    Keyboard,
} from 'react-native';
import LoadingOverlay from './components/loading/loadingOverlay';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { withNavigation } from 'react-navigation';

class loginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            loading: false,
            fromPayment: props.navigation.state.params
                ? props.navigation.state.params.fromPayment
                : false,
        };
    }

    handleLogin = () => {
        Keyboard.dismiss();
        this.setState({ loading: true, errorMessage: null });
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                // Logged in
                this.props.navigation.navigate(
                    this.state.fromPayment ? 'Checkout' : 'Main',
                );
            })
            .catch(error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert('Error', errorMessage, [
                    {
                        text: 'OK',
                        onPress: () =>
                            this.setState({ errorMessage, loading: false }),
                    },
                ]);
            });
    };

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled
            >
                {this.state.loading && <LoadingOverlay />}

                <Image
                    style={{ height: 30, width: '100%', marginVertical: 50 }}
                    source={require('./components/resources/ExpressoTransp.png')}
                    resizeMode="contain"
                />

                {this.state.fromPayment ? (
                    <View>
                        <Text style={styles.fromPay}>
                            Logga in för att göra beställning
                        </Text>
                    </View>
                ) : null}

                <TextInput
                    style={styles.input}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    placeholderTextColor="#7C6A70"
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput
                    style={styles.input}
                    textContentType="password"
                    secureTextEntry
                    placeholder="Lösenord"
                    placeholderTextColor="#7C6A70"
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity
                    style={styles.logIn}
                    onPress={this.handleLogin}
                >
                    <Text style={styles.logInText}>LOGGA IN</Text>
                </TouchableOpacity>

                <View style={styles.textButtonView}>
                    <View style={styles.toView}>
                        <Text style={{ color: '#101010' }}>
                            Har du inget konto?{' '}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.navigate('SignUp', {
                                    fromPayment: this.state.fromPayment,
                                })
                            }
                        >
                            <Text style={{ color: '#5AA3B7' }}>
                                Registrera dig
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.textButtonView}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Forgot')}
                    >
                        <Text style={{ color: '#5AA3B7' }}>
                            Glömt lösenordet?
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        paddingHorizontal: 26,
    },
    input: {
        height: 40,
        borderColor: '#7C6A70',
        borderWidth: 0,
        borderBottomWidth: 2,
        marginBottom: 20,
        color: '#57454B',
    },
    logIn: {
        backgroundColor: '#5AA3B7',
        paddingVertical: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    logInText: {
        color: 'white',
        fontWeight: '700',
        letterSpacing: 2,
    },
    textButtonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    fromPay: {
        color: '#57454B',
        fontWeight: '600',
        fontSize: 18,
        alignSelf: 'center',
        paddingBottom: 50,
    },
    toView: {
        flexDirection: 'row',
    },
});

export default withNavigation(loginPage);