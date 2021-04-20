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
        onLongPress={() => setHidden(false)}
        onPressOut={() => setHidden(true)}
      >
        {hidden ? (
          <View style={styles.hidden}>
            <Text>i</Text>
          </View>
        ) : (
          <View style={styles.unHidden}>
            <Text>i</Text>
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
  hidden: {
    width: 40,
    height: 20,
    backgroundColor: "yellow",
    // position: "absolute",
    marginTop: 100,
  },
  unHidden: {
    width: windowWidth,
    height: 40,
    marginTop: 80,
    backgroundColor: "yellow",
  },
  textContainer: {
    width: 400,
  },
  imgContainer: {
    // width: windowWidth,
    height: windowHeight,
    position: "absolute",
  },
});
