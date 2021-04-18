import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text>Go to Profile</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
