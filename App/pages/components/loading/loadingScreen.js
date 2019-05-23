import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Modal,
} from 'react-native';

export default loadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5AA3B7" />
    </View>
  );
};

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
});
