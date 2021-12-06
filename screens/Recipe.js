import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  ScrollView,
} from 'react-native';
import {Viewers} from '../components';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const SCREEN_HEIGHT = 350;

const Recipe = ({navigation, route}) => {
  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          flexDirection: 'row',
          alignItems: 'flex-end',
          height: 70,
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: 30,
            height: 35,
            width: 35,
          }}>
          <Image
            source={icons.back}
            style={{
              height: 15,
              width: 15,
              tintColor: COLORS.lightGray,
              //backgroundColor: COLORS.transparentBlack,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Bookmark Pressed')}>
          <Image
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
            style={{
              height: 35,
              width: 35,
              tintColor: COLORS.darkGreen,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RecipeCreatorInfoCard = ({selectedRecipe}) => {
    return (
      <View
        style={{
          backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
          borderRadius: 10,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          flexDirection: 'row',
          //justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={selectedRecipe?.author.profilePic}
          style={{
            height: 35,
            width: 35,
            borderRadius: 30,
            marginLeft: 20,
          }}
        />
        <View
          style={{
            marginLeft: 50,
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray2,
            }}>
            Recipe by:
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              lineHeight: 21,
              color: COLORS.white,
            }}>{`${selectedRecipe?.author.name}`}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderRadius: 5,
            borderColor: COLORS.darkGreen,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 70,
          }}>
          <Image
            source={icons.rightArrow}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.darkGreen,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderRecipeInfo = () => {
    return (
      <View
        style={{
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {/* Recipe */}
        <View
          style={{
            flex: 1.5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
            }}>
            {selectedRecipe?.name}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              marginTop: 5,
            }}>{`${selectedRecipe?.duration} | ${selectedRecipe?.serving} Serving`}</Text>
        </View>
        {/* Viewer */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Viewers viewerList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  };

  const renderIngredientHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          alignItems: 'center',
        }}>
        <Text
          style={{
            flex: 1,
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Ingredients
        </Text>
        <Text
          style={{
            ...FONTS.body4,
          }}>
          {selectedRecipe?.ingredients.length} Items
        </Text>
      </View>
    );
  };

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  React.useEffect(() => {
    const {recipe} = route.params;

    setSelectedRecipe(recipe);
  }, []);
  console.log(selectedRecipe);

  const renderRecipeHeader = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        style={{
          // alignItems: 'center',

          overflow: 'hidden',
          marginTop: -1000,
          paddingTop: 1000,
        }}>
        <Animated.Image
          source={selectedRecipe?.image}
          style={{
            height: SCREEN_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
                  outputRange: [-SCREEN_HEIGHT / 2, 0, SCREEN_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-SCREEN_HEIGHT, 0, SCREEN_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
          resizeMode="contain"
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            //backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
            //borderRadius: 10,
            //paddingHorizontal: SIZES.radius,
            //paddingVertical: 5,
            //flexDirection: 'row',
            //justifyContent: 'space-between',
            //alignItems: 'center',
            height: 70,
          }}>
          <RecipeCreatorInfoCard selectedRecipe={selectedRecipe} />
        </Animated.View>
      </ScrollView>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderRecipeHeader()}
            {/* info */}
            {renderRecipeInfo()}
            {/* ingredient title */}
            {renderIngredientHeader()}
          </View>
        }
        keyExtractor={item => `${item.id}`}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                marginVertical: 5,
              }}>
              {/* icon */}
              <View
                style={{
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.gray2,
                  borderRadius: 10,
                }}>
                <Image
                  source={item.icon}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                  resizeMode="cover"
                />
                {/* <Text>{`${selectedRecipe?.ingredients.length} item`}</Text> */}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    ...FONTS.body3,
                  }}>
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body3,
                  }}>
                  {item.quantity}
                </Text>
              </View>
            </View>
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}></View>
        }
      />
      {/* headerBar */}
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;

const styles = StyleSheet.create({});
