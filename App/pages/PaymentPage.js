import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import PaymentItem from './components/checkout/PaymentItem';
import OrderButton from './components/checkout/OrderButton';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';

const PaymentPage = props => {
  const cart = props.cart;
  const total = cart.price;
  const orderItems = cart.orderItems;

  return (
    <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 150,
        }}
      >
        {/* Varor */}
        <View style={styles.viewBlock}>
          <Text style={styles.viewBlockTitle}>Varor</Text>
          {orderItems.map((orderItem, i) => (
            <PaymentItem key={i} orderItem={orderItem} />
          ))}
        </View>

        {/* Uthämtning */}
        <View style={styles.viewBlock}>
          <Text style={styles.viewBlockTitle}>Uthämtning</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 24,
              marginTop: 10,
            }}
          >
            <View style={{ marginRight: 20, marginTop: 5 }}>
              <SimpleLineIcons name="location-pin" size={16} color="#5AA3B7" />
            </View>

            <View>
              <Text style={{ color: '#57454B', fontSize: 14 }}>Bulten</Text>
              <Text style={{ color: '#57454B', fontSize: 12, marginTop: 3 }}>
                Hörsalsvägen 7, Johanneberg
              </Text>
            </View>
          </View>
        </View>

        {/* Betalningsmetod */}
        <View style={styles.viewBlock}>
          <Text style={styles.viewBlockTitle}>Betalningsmetod</Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              paddingHorizontal: 24,
              marginTop: 10,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <AntDesign name="creditcard" size={16} color="#5AA3B7" />
            </View>

            <Text style={{ color: '#57454B', fontSize: 14 }}>
              **** **** **** 1234
            </Text>

            <TouchableOpacity
              style={{ marginLeft: 'auto' }}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={{ color: '#5AA3B7', fontSize: 12 }}>Ändra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Nedre betalningsruta */}
      <View style={styles.bottomPayBlock}>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalText}>Totalt</Text>
          <Text style={styles.totalText}>{total} kr</Text>
        </View>
        <OrderButton
          onPress={() => console.log('BETALA')}
          buttonText="BETALA"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBlock: {
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  viewBlockTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#57454B',
    marginHorizontal: 24,
    marginTop: 20,
  },
  bottomPayBlock: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 140,
    backgroundColor: '#57454B',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmountContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  totalText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

const mapStateToProps = state => {
  return { cart: state.cart };
};

export default connect(mapStateToProps)(PaymentPage);
