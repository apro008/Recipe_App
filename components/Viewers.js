/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {FONTS, COLORS} from '../constants';

const Viewers = ({viewerList}) => {
  if (viewerList?.length == 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Be the first one to try this.</Text>
      </View>
    );
  } else if (viewerList?.length <= 4) {
    return (
      <View>
        {/* Profile */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 10,
          }}>
          {viewerList?.map((item, index) => (
            // eslint-disable-next-line react/self-closing-comp
            <View
              key={index}
              style={{
                height: 50,
                width: 50,
                marginLeft: index === 0 ? 0 : -20,
                //borderWidth: 1,
              }}>
              <Image
                source={item.profilePic}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 30,
                }}
              />
            </View>
          ))}
        </View>
        {/* Text */}
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
            textAlign: 'right',
            lineHeight: 18,
          }}>
          {viewerList?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
            textAlign: 'right',
            lineHeight: 18,
          }}>
          Already try this
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          {viewerList?.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: index === 0 ? 0 : -20,
                  }}>
                  <Image
                    source={item.profilePic}
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 30,
                    }}
                  />
                </View>
              );
            }
            if (index == 3) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: -20,
                    borderRadius: 30,
                    backgroundColor: COLORS.darkGreen,
                  }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.body4,
                    }}>
                    {viewerList?.length - 3}+
                  </Text>
                </View>
              );
            }
          })}
        </View>
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
            textAlign: 'right',
            lineHeight: 18,
          }}>
          {viewerList?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
            textAlign: 'right',
            lineHeight: 18,
          }}>
          Already try this
        </Text>
      </View>
    );
  }
};

export default Viewers;

const styles = StyleSheet.create({});
