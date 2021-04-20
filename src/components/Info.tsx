import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  PressableProps,
} from "react-native";
import { windowWidth } from "../constants/Layout";

type ProfileProps = PressableProps & {
  //   info?: any;
  style?: any;
};

const Info = ({ style, ...props }: ProfileProps) => {
  const [hidden, setHidden] = React.useState(true);

  return (
    <View
      style={[style, styles.container]}
      onPress={() => {
        console.log("basdi");
        setHidden(false);
      }}
      {...props}
    >
      {hidden && (
        <View style={styles.hidden}>
          <Text>i</Text>
        </View>
      )}
      {!hidden && (
        <View style={styles.notHidden}>
          <Text>i</Text>
        </View>
      )}
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {},
  hidden: {
    width: 40,
    height: 20,
    backgroundColor: "yellow",
    // position: "absolute",
    marginTop: 100,
  },
  notHidden: {
    width: 200,
    height: 20,
    backgroundColor: "yellow",
  },
});
