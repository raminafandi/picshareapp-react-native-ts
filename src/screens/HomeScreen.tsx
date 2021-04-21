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
import { Entypo } from '@expo/vector-icons';

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
        onPressOut={() => setTimeout(() => setHidden(true), 400)}
        style={{marginTop:300}}
        >
        
        {hidden ? (
          <View style={styles.hidden}>
            <Entypo name="info" size={17} color="white" />
          </View>
        ) : (
          <View style={styles.unHidden}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, laboriosam repellat! Officiis porro commodi libero a cumque quo quam architecto voluptatem voluptatibus, consequatur soluta aliquam, animi saepe, aut minus sit.</Text>
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
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    // position: "absolute",
    // marginTop: 300,
    marginLeft: 20
  },
  unHidden: {
    // width: windowWidth-50,
    height: 80,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    // position: "absolute",
    // marginTop: 240,
    marginLeft: 20
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
