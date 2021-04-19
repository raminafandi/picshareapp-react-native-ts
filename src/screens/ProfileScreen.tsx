import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import Profile from "../components/Profile";
import { windowHeight, windowWidth } from "../constants/Layout";

const ProfileScreen = ({ navigation, route }: any) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          source={{ uri: item.images[0] }}
          style={[StyleSheet.absoluteFillObject, { height: windowHeight / 2 }]}
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
    </View>
  );
};

ProfileScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.image`,
      animation: "move",
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
  },
  profileContainer: {
    position: "absolute",
    top: 180,
  },
  imgContainer: {
    width: windowWidth,
    height: 260,
  },
});
