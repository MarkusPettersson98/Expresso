import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SimpleLineIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { incrementCoffee, decrementCoffee } from '../redux/actions';

export default (pickUpPoint = () => {
    return (
        <View
            style={{
                flexDirection: 'column',
                marginHorizontal: 24,
                marginTop: 16,
                marginBottom: 10,
                paddingBottom: 20,
                width: '100%',
                paddingLeft: 25,
            }}
        >
            <Text className="hämtas på" style={styles.titleText}>
                Hämtas på
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <FontAwesome
                    style={{
                        paddingTop: 10,
                    }}
                    name="map-pin"
                    size={20}
                    color="#57454B"
                />
                <View
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        width: '90%',
                        paddingTop: 10,
                    }}
                >
                    <View
                        style={{
                            paddingLeft: 15,
                            flexDirection: 'column',
                        }}
                    >
                        <Text style={styles.cafeText}> Bulten</Text>
                        <Text style={styles.locationText}>
                            {' '}
                            Hörsalsvägen 7, Johanneberg{' '}
                        </Text>
                    </View>
                    <Ionicons name="ios-arrow-up" size={20} color="gray" />
                </View>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    titleText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#57454B',
    },
    cafeText: {
        fontWeight: '500',
        fontSize: 25,
        color: '#57454B',
    },
    locationText: {
        fontSize: 14,
        color: '#7C7074',
    },
});
