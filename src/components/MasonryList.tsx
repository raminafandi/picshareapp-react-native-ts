import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ScrollViewProps,
  FlatListProps,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';

import { windowWidth, windowHeight } from '../constants/Layout';

type MasonryListProps = FlatListProps & {
  items?: any;
  style?: any;
};

const MasonryList = ({items, style, ...props}: MasonryListProps) => {
  return (
      <Animatable.View  animation ="fadeInUp" easing="ease-in-out" duration={800} delay={300} useNativeDriver>
<FlatList 
    nestedScrollEnabled
    numColumns={2}
    data={items}
    style={[style, styles.container]} 
    renderItem={({ item , index}) => (
        <Image key={index} style={styles.img } source={{uri:item}}/>
      )}
    {...props}
    
    
    />
      </Animatable.View>
    )
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    //   marginTop:windowHeight/2
    // backgroundColor:'black'
  },
  img:{
      width:windowWidth/2-10,
      height: 300,
      marginHorizontal:5,
      marginVertical: 5
  }

});
