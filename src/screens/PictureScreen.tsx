import React from "react";
import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { windowHeight, windowWidth } from "../constants/Layout";
import { AntDesign } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";

const PictureScreen = ({ navigation, route }: any) => {
  const { item } = route.params;
  console.log(item.image);
  return (
    <SafeAreaView style={styles.container}>
      <SharedElement id={`item.${item.id}.image2`}>
        <Image
          source={{ uri: item.image }}
          style={[StyleSheet.absoluteFill, { height: windowHeight }]}
          resizeMode={"cover"}
          resizeMethod={"resize"}
        />
      </SharedElement>
      <Pressable
        style={styles.arrowContainer}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={25} color="white" />
      </Pressable>
    </SafeAreaView>
  );
};

PictureScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: `item.${item.id}.image2`,
      animation: "move",
      resize: "auto",
    },
  ];
};

export default PictureScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  arrowContainer: {
    backgroundColor: "rgba(0,0,0,0.8)",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 20,
    borderRadius: 20,
  },
});
