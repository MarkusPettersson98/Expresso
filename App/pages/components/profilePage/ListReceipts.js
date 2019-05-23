import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { withNavigation } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';

class listReceipts extends React.Component {
  state = {
    activeSections: [],
  };

  _renderHeader = section => {
    return (
      <View style={styles.receiptTitle}>
        <Text style = {styles.text}>
            {section.title.date}
        </Text>
        <Text style = {styles.text}>
            {section.title.shop}
        </Text>
        <Text style = {styles.text}>
            Totalt: {section.title.total}kr
        </Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.receiptContent}>
        <Text style = {styles.text}>
            This is the content!!
        </Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            {/* {this.props.receiptList.map((item,i) => (
                <TouchableOpacity
                    key = {i}
                    style = {styles.receiptItem}
                    onPress={() => console.log(item)}
                >
                    <Text style = {styles.text}>
                        {item.title.date}
                    </Text>
                    <Text style = {styles.text}>
                        {item.title.shop}
                    </Text>
                    <Text style = {styles.text}>
                        Totalt: {item.title.total}kr
                    </Text>
                </TouchableOpacity>

            ))}

            {console.log(this.props.receiptList)} */}
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

export default withNavigation(listReceipts);
