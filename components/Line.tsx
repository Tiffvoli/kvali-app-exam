import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   time: string;
   title: string;
}

export default function Line({ time, title }: Props) {
   return (
      <View style={styles.container}>
         <Text style={[defaultStyles.darkText, styles.text, styles.smallText]}>
            {time}
         </Text>
         <Text style={[defaultStyles.darkText, styles.text]}>{title}</Text>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderBottomColor: '#f5f5f5',
      borderStyle: 'solid',
      borderBottomWidth: 2,
      paddingBottom: 12,
      paddingTop: 10,
   },
   text: {
      fontFamily: 'OpenSans-Regular',
      fontSize: 14,
      width: '60%',
   },
   smallText: {
      width: '15%',
   },
});
