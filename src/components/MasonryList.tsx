import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  FlatListProps,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import * as Animatable from "react-native-animatable";

import { windowWidth, windowHeight } from "../constants/Layout";
import { SharedElement } from "react-navigation-shared-element";

type MasonryListProps = FlatListProps & {
  items?: any;
  style?: any;
  navigation?: any;
};

const MasonryList = ({
  items,
  style,
  navigation,
  ...props
}: MasonryListProps) => {
  return (
    <Animatable.View
      animation="fadeInUp"
      easing="ease-in-out"
      duration={800}
      delay={300}
      useNativeDriver
    >
      <FlatList
        nestedScrollEnabled
        numColumns={2}
        data={items}
        style={[style, styles.container]}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => {
              navigation.navigate("Picture", {
                item: {
                  id: index,
                  image: item,
                },
              });
            }}
          >
            <SharedElement id={`item.${index}.image2`}>
              <Image
                style={styles.img}
                source={{ uri: item }}
                resizeMode={"cover"}
                resizeMethod={"resize"}
              />
            </SharedElement>
          </Pressable>
        )}
        {...props}
      />
    </Animatable.View>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  img: {
    width: windowWidth / 2 - 10,
    height: 300,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
