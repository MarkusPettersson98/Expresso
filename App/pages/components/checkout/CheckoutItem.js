import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const CheckoutItem = (props) => {
    return (
      <View style={{
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 16,
        marginBottom: 10,
        borderBottomColor: '#D7D7D7',
        borderBottomWidth: 1,
        paddingBottom: 20,
      }}>
        <View style={{
          flex: 1,
        }}>
          <SimpleLineIcons name="cup" size={20} color="#57454B" />
        </View>
        <View style={{
          flex: 4,
        }}>
          <Text style={styles.titleText}>
            {props.name}
          </Text>
          <Text style={styles.descText}>Egen mugg</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}>
            <AntDesign name="minuscircleo" size={20} color='#5AA3B7' />
            <Text style={styles.numberText}>1</Text>
            <AntDesign name="pluscircleo" size={20} color='#5AA3B7' />
          </View>
        </View>
        <View style={{
          flex: 1,
          alignItems: 'flex-end',
        }}>
          <Text style={styles.priceText}>{`${props.price} kr`}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#57454B'
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#57454B',
  },
  descText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#7C6A70',
    marginTop: 6,
  },
  numberText: {
    fontSize: 16,
    marginHorizontal: 15,
  }
});

export default CheckoutItem;
