import React from 'react';
import {Pressable, FlatList, StyleSheet, Text, Image, View} from 'react-native';
import {windowWidth, windowHeight} from '../constants/Layout';

import data from '../constants/data.json';

const Home = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <View style={styles.renderContainer}>
      <Image
        source={{uri: item.images[0]}}
        style={[StyleSheet.absoluteFillObject, styles.imgContainer]}
      />
      <Pressable
        onPress={() => {
          console.log('Pressed');
          navigation.navigate('Profile');
        }}
        style={styles.profileContainer}>
        <Text>{item.id}</Text>
        <Text>{item.first_name}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
    // flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    position: 'absolute',
    bottom: 120,
    width: windowWidth - 26,
    marginHorizontal: 13,
    height: 160,
    backgroundColor: 'white',
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  renderContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  textContainer: {
    width: 400,
  },
  imgContainer: {
    width: windowWidth,
    height: windowHeight,
  },
});
