import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { withNavigation } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';
import ListCoffees from './ListCoffees';

/*
TODO: Hämta informationen på rätt sätt
*/
class ListReceipts extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = item => {
    return (
      <View style={styles.receiptTitle}>
        <Text style = {styles.text}>
          {(new Date(item.date)).toDateString()}
        </Text>
        <Text style = {styles.text}>
            {item.shop.name}
        </Text>
        <Text style = {styles.text}>
            Totalt: {item.totalPrice}kr
        </Text>
      </View>
    );
  };

  _renderContent = item => {
    return (
      <View style={styles.receiptContent}>
        <ListCoffees item = {item.coffees} />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <Accordion
              sections={this.props.receiptList}
              activeSections={this.state.activeSections}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}
            />
        </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    receiptTitle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#555',
        backgroundColor: '#d2d8d5',
        paddingVertical: 10,
    },
    receiptContent: {
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderBottomWidth: 2,
      borderColor: '#555',
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});

export default withNavigation(ListReceipts);
