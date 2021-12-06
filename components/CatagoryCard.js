import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS, SIZES, FONTS} from '../constants';

const CatagoryCard = ({containerStyle, onPress, catagoryItem}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.gray2,
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        ...containerStyle,
      }}>
      <Image
        source={catagoryItem.image}
        style={{
          height: 100,
          width: 100,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          paddingHorizontal: 20,
          width: '65%',
        }}>
        <Text
          style={{
            ...FONTS.h2,
            flex: 1,
          }}>
          {catagoryItem.name}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.gray,
          }}>
          {catagoryItem.duration} | {catagoryItem.serving}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatagoryCard;

const styles = StyleSheet.create({});
