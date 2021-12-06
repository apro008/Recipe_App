import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ModalButton} from '../components/';

import {images, COLORS, FONTS, SIZES} from '../constants';

const Login = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View style={styles.bgContainer}>
        <ImageBackground
          source={images.loginBackground}
          style={styles.image}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={styles.gradient}>
            <Text style={styles.titleText}>
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      <Text style={styles.descriptionText}>
        Discover more than 1200 food recipes in your hands and cooking it
        easily!
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ModalButton
          label="login"
          buttonContainer={{
            paddingVertical: 15,
            borderRadius: 10,
            //margin: 10,
            backgroundColor: COLORS.lime,
          }}
          onPress={() => navigation.replace('Home')}
        />
        <ModalButton
          label="Sign up"
          buttonContainer={{
            paddingVertical: 15,
            borderRadius: 10,
            //margin: 10,
            marginTop: SIZES.radius,
          }}
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  descriptionText: {
    color: COLORS.gray,
    width: '70%',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
  },
  gradient: {
    height: 200,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'flex-end',
  },
  titleText: {
    height: '80%',
    color: COLORS.white,
    ...FONTS.largeTitle,
    lineHeight: 50,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bgContainer: {
    height: SIZES.height > 700 ? '65%' : '60%',
    //borderWidth: 1,
    borderColor: COLORS.white,
  },
});
