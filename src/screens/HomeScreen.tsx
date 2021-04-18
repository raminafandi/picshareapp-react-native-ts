import React from 'react';
import {Pressable, FlatList, StyleSheet, Text, View} from 'react-native';
import data from '../constants/data.json';

const Home = ({navigation}: any) => {
  const renderItem = ({item}: any) => (
    <View>
      <Text>{item.id}</Text>
    </View>
  );

  return (
    <View>
      <Text>Home</Text>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
