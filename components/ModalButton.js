import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, FONTS} from '../constants';

const ModalButton = ({label, buttonContainer, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {...buttonContainer}]}>
      <Text style={[styles.text]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  container: {
    // height: '20%',
    // width: '90%',
    // alignItems: 'center',
    // justifyContent: 'center',
    //backgroundColor: COLORS.lime,
    // borderTopEndRadius: 10,
    // borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lime,
    marginHorizontal: 10,
  },
  text: {
    ...FONTS.h3,
    textAlign: 'center',
    color: COLORS.white,
  },
});
