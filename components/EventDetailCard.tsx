import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import { Link } from '@react-navigation/native';
import defaultStyles from '../styles/General';
import * as SecureStore from 'expo-secure-store';

import { useDispatch } from 'react-redux';

interface Props {
   description: string;
}

export default function EventRoomCard({ description }: Props) {
   return (
      <View style={styles.container}>
         <Text>{description}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
   },
});
