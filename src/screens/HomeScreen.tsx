import React from 'react';
import {FlatList, StyleSheet, Image, View} from 'react-native';
import {windowWidth, windowHeight} from '../constants/Layout';

import Profile from '../components/Profile';

import data from '../constants/data.json';

const Home = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.renderContainer}>
      <Image
        source={{uri: item.images[0]}}
        style={[StyleSheet.absoluteFillObject, styles.imgContainer]}
      />
      <Profile
        style={styles.profileContainer}
        item={item}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderContainer: {
    width: windowWidth,
    height: windowHeight,
  },
  profileContainer: {
    position: 'absolute',
    bottom: 150,
  },
  textContainer: {
    width: 400,
  },
  imgContainer: {
    width: windowWidth,
    height: windowHeight,
  },
});
