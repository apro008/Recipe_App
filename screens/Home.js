import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

import {dummyData, COLORS, SIZES, FONTS, images, icons} from '../constants';
import {CatagoryCard, RecipeCard} from '../components';

const Home = ({navigation}) => {
  const [search, setSearch] = React.useState('');

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h2, color: COLORS.darkGreen}}>
            Hello World,
          </Text>
          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            What you want to cook today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Profile')}>
          <Image source={images.UserProfile1} style={styles.profilePicture} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: COLORS.lightGray,
          marginHorizontal: SIZES.padding,
          borderRadius: SIZES.radius,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            marginHorizontal: SIZES.radius,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          style={{
            ...FONTS.body3,
            alignItems: 'center',
            justifyContent: 'center',
            //fontSize: 16,
          }}
          placeholder="Search Recipes                                  "
          value={search}
          onChangeText={text => setSearch(text)}
          placeholderTextColor={COLORS.gray}
        />
      </View>
    );
  };

  const renderSeeRecipe = () => {
    return (
      <View
        style={{
          // height: 80,
          backgroundColor: COLORS.lightGreen,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          marginTop: SIZES.padding,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={images.recipe}
          style={{
            height: 70,
            width: 70,
            marginHorizontal: SIZES.radius,
          }}
        />
        <View
          style={{
            flex: 1,
            padding: 6,
          }}>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.black,
              width: '70%',
            }}>
            You have 12 Recipes that you haven't tried yet.
          </Text>
          <TouchableOpacity
            onPress={() => console.log('recipe')}
            style={{
              marginTop: 5,
            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontWeight: 'bold',
                color: COLORS.darkGreen,
                ...FONTS.h4,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrendingRecipe = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          // marginHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            marginHorizontal: SIZES.padding,
            color: COLORS.black,
          }}>
          Trending Recipes
        </Text>
        <FlatList
          data={dummyData.trendingRecipes}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          keyboardDismissMode="on-drag"
          horizontal
          renderItem={({item, index}) => {
            return (
              <RecipeCard
                recipeItem={item}
                image={item.image}
                onPress={() => navigation.navigate('Recipe', {recipe: item})}
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 0,
                }}
              />
            );
          }}
        />
      </View>
    );
  };

  const renderCatagorySection = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Catagories
        </Text>
        <TouchableOpacity onPress={() => console.log('Catagories- View all')}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.lightGray2,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dummyData.categories}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        renderItem={({item}) => {
          return (
            <CatagoryCard
              catagoryItem={item}
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* SearchBar */}
            {renderSearchBar()}
            {/* See Recipe */}
            {renderSeeRecipe()}
            {/* Trending Recipe */}
            {renderTrendingRecipe()}
            {/* Catagory Section */}
            {renderCatagorySection()}
          </View>
        }
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: SIZES.padding,
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
