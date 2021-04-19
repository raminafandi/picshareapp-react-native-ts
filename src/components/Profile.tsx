import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  PressableProps,
} from 'react-native';
import {windowWidth} from '../constants/Layout';

type ProfileProps = PressableProps & {
  item?: any;
  style?: any;
};

const Profile = ({item, style, ...props}: ProfileProps) => {
  return (
    <Pressable style={[style, styles.container]} {...props}>
      <View style={styles.topContainer}>
        <Image source={{uri: item.icon}} style={styles.icon} />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>
            {item.first_name + '  ' + item.last_name}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomBlock}>
          <Text style={styles.number}>147</Text>
          <Text style={styles.info}>Album</Text>
        </View>
        <View style={styles.bottomBlock}>
          <Text style={styles.number}>8,667</Text>
          <Text style={styles.info}>Followers</Text>
        </View>
        <View style={styles.bottomBlock}>
          <Text style={styles.number}>282</Text>
          <Text style={styles.info}>Following</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 13,
    height: 160,
    backgroundColor: 'white',
    padding: 20,
    width: windowWidth - 26,
    borderRadius: 6,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
  },
  topContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  rightContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 13,
    color: 'grey',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginHorizontal: 13,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  bottomBlock: {
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
