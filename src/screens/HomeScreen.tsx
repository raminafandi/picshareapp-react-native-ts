import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from "react-native";
import { windowWidth, windowHeight } from "../constants/Layout";
import { Entypo } from "@expo/vector-icons";

import Profile from "../components/Profile";
import Info from "../components/Info";
import data from "../constants/data.json";
import { SharedElement } from "react-navigation-shared-element";

const Home = ({ navigation }: any) => {
  const [hidden, setHidden] = React.useState(true);
  const renderItem = ({ item }: any) => (
    <View style={styles.renderContainer}>
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          source={{ uri: item.images[0] }}
          style={[StyleSheet.absoluteFillObject, styles.imgContainer]}
          resizeMode={"cover"}
        />
      </SharedElement>
      <Pressable
        onPressIn={() => setHidden(false)}
        onPressOut={() => setTimeout(() => setHidden(true), 300)}
        style={styles.pressable}
      >
        {hidden ? (
          <View style={styles.hidden}>
            <Entypo name="info" size={17} color="white" />
          </View>
        ) : (
          <View style={styles.unHidden}>
            <View style={styles.rowContainer}>
              <View style={styles.blockContainer}>
                <Text style={styles.title}>Shutter</Text>
                <Text style={styles.value}>1/125 sec</Text>
              </View>
              <View style={styles.blockContainer}>
                <Text style={styles.title}>ISO</Text>
                <Text style={styles.value}>160</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.blockContainer}>
                <Text style={styles.title}>Focal Length</Text>
                <Text style={styles.value}>45.00mm</Text>
              </View>
              <View style={styles.blockContainer}>
                <Text style={styles.title}>Aperture</Text>
                <Text style={styles.value}>f/8.0</Text>
              </View>
            </View>
          </View>
        )}
      </Pressable>
      <SharedElement
        style={styles.profileContainer}
        id={`item.${item.id}.user`}
      >
        <Profile
          item={item}
          onPress={() => {
            navigation.navigate("Profile", {
              item: item,
            });
          }}
        />
      </SharedElement>
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
        keyExtractor={(item) => item.id.toString()}
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
    position: "absolute",
    bottom: 120,
  },
  pressable: {
    width: 50,
    marginTop: 270,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 60,
    marginVertical: 10,
    // alignItems: "center",
  },
  blockContainer: {
    // alignSelf: "flex-start",
    width: windowWidth / 4.5,
    alignSelf: "center",
  },
  title: {
    color: "#787878",
    fontSize: 12,
  },
  value: {
    color: "white",
    fontSize: 17,
  },
  hidden: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    // position: "absolute",
    marginTop: 30,
    marginLeft: 20,
  },
  unHidden: {
    width: windowWidth - 50,
    height: 120,
    borderRadius: 15,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
    marginLeft: 20,
  },
  textContainer: {
    width: 400,
  },
  imgContainer: {
    // width: windowWidth,
    height: windowHeight,
    // position: "absolute",
  },
});
