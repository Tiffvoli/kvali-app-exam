import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   title: string;
   number: number;
   icon: () => void;
   secondaryIcon: () => void;
}

export default function InterestGoing({ title, icon, number }: Props) {
   return (
      <View style={styles.container}>
         <View style={styles.iconStyle}>{icon}</View>
         <Text style={styles.labelStyle}>
            {number} {title}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
   },
   buttonStyle: {
      margin: 10,
      // padding: 18,
      backgroundColor: '#5050A5',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   leftWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   labelStyle: {
      color: '#333',
      fontFamily: 'OpenSans-Bold',
      fontSize: 12,
      // textTransform: 'capitalize',
   },
   iconStyle: {
      marginRight: 8,
   },
   secondaryIconStyle: {},
});
