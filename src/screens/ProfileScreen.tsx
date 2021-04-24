import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Profile from "../components/Profile";
import { windowHeight, windowWidth } from "../constants/Layout";
import { ScrollView } from "react-native-gesture-handler";

import MasonryList from "../components/MasonryList";

const ProfileScreen = ({ navigation, route }: any) => {
  const { item } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          source={{ uri: item.images[0] }}
          style={[styles.imgContainer]}
          resizeMode={"cover"}
          // resizeMethod={"resize"}
        />
      </SharedElement>
      <SharedElement id={`item.${item.id}.user`}>
        <Profile
          style={styles.profileContainer}
          item={item}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
      </SharedElement>
      <MasonryList
        style={styles.masonryList}
        items={item.images}
        navigation={navigation}
      />
    </ScrollView>
  );
};

ProfileScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.image`,
      animation: "fade",
      resize: "auto",
    },
    {
      id: `item.${item.id}.user`,
      animation: "move",
      resize: "none",
    },
  ];
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    backgroundColor: "black",
  },
  profileContainer: {
    position: "absolute",
    top: -90,
  },
  imgContainer: {
    // width: "100%",
    height: windowHeight / 3,
    // position: "absolute",
  },
  masonryList: { marginTop: 90 },
});
