import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Profile from '../components/Profile';
import {windowWidth} from '../constants/Layout';

const ProfileScreen = ({navigation, route}: any) => {
  const data = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: data.item.images[0]}}
        style={[StyleSheet.absoluteFillObject, styles.imgContainer]}
      />
      <Profile
        style={styles.profileContainer}
        item={data.item}
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  profileContainer: {
    position: 'absolute',
    top: 180,
  },
  imgContainer: {
    width: windowWidth,
    height: 260,
  },
});
