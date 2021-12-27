import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   TouchableOpacity,
   Text,
   ImageBackground,
   Dimensions,
   Pressable,
} from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   description: string;
}

export default function Collapsible({ description }: Props) {
   return (
      <View style={styles.container}>
         <Text
            numberOfLines={5}
            ellipsizeMode="tail"
            style={[
               defaultStyles.bodyText,
               defaultStyles.darkText,
               styles.bodyText,
            ]}>
            {description}
         </Text>
         <Text style={[defaultStyles.centerText, styles.purpleText]}>
            Show more
         </Text>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      marginVertical: 25,
      paddingHorizontal: 20,
      paddingVertical: 30,
   },
   purpleText: {
      color: '#5050A5',
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
      paddingTop: 20,
   },
   bodyText: {
      lineHeight: 22,
   },
});
