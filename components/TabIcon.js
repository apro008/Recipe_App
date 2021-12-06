/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../constants';

const TabIcon = ({focused, icon}) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          height: 30,
          width: 30,
          tintColor: focused ? COLORS.darkGreen : COLORS.lightlime,
        }}
      />
      {focused && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 5,
            backgroundColor: COLORS.darkGreen,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      )}
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 50,
  },
});
