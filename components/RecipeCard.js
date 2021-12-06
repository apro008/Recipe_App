import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {SIZES, COLORS, FONTS, icons} from '../constants';

const RecipeCard = ({image, containerStyle, onPress, recipeItem}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: SIZES.radius,
        marginRight: 20,
        height: 350,
        width: 250,
        ...containerStyle,
        borderRadius: SIZES.radius,
      }}>
      <Image
        source={image}
        resizeMode="cover"
        style={{
          height: 350,
          width: 250,
          borderRadius: SIZES.radius,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
          //backgroundColor: COLORS.transparentGray,
          backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h4,
          }}>
          {recipeItem.category}
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          //left: 15,
          right: 30,
          bottom: 20,
          //left: 5,
          height: 110,
          width: '80%',
          //backgroundColor: COLORS.transparentGray,
          backgroundColor: 'rgba( 0, 0, 0, 0.8 )',
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            width: '70%',
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          {recipeItem.name}
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.gray,
          }}>
          {`${recipeItem.duration} | ${recipeItem.serving} Serving`}
        </Text>
        <Image
          source={icons.bookmarkFilled}
          style={{
            position: 'absolute',
            top: 19,
            right: 20,
            height: 15,
            width: 15,
            tintColor: COLORS.darkGreen,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
