import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import defaultStyles from '../styles/General';
import Line from './Line';

interface Props {
   time1: string;
   title1: string;
   time2: string;
   title2: string;
   time3: string;
   title3: string;
   time4: string;
   title4: string;
}

export default function Collapsible({
   time1,
   title1,
   time2,
   title2,
   time3,
   title3,
   time4,
   title4,
}: Props) {
   return (
      <View style={styles.container}>
         <Text style={styles.purpleText}>Schedule</Text>
         <Line time={time1} title={title1} />
         <Line time={time2} title={title2} />
         <Line time={time3} title={title3} />
         <Line time={time4} title={title4} />
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
      fontFamily: 'Teko-Medium',
      fontSize: 26,
      textTransform: 'uppercase',
   },
   bodyText: {
      lineHeight: 22,
   },
});
