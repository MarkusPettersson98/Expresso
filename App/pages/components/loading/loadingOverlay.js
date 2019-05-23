import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Modal,
} from 'react-native';

export default loadingOverlay = () => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={true}>

      <View style={styles.container}>
        <ActivityIndicator size="large" color="#5AA3B7" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#000000AA',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
