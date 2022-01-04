import React from 'react';
import defaultStyles from '../styles/General';
import { useNavigation } from '@react-navigation/core';
// Components
import { StyleSheet, View, Button } from 'react-native';
import CardOverlay from '../components/CardOverlay';
import DiscoverCard from '../components/DiscoverCard';
import SearchField from '../components/SearchField';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function DiscoverScreen() {
   const navigation = useNavigation();
   return (
      <View style={[styles.align, defaultStyles.loggedInBackground]}>
         <SearchField placeholder="Search for events, posts and more"></SearchField>
         <DiscoverCard
            title="All events"
            imageSource={require('../assets/discover-imgs/all-events-2x.png')}
            onPress={() => navigation.navigate('EventsScreen')}
            overlayColor={{
               backgroundColor: '#700F6E',
            }}></DiscoverCard>
         <DiscoverCard
            title="All Student Organisations"
            imageSource={require('../assets/discover-imgs/all-orgs-2x.png')}
            overlayColor={{
               backgroundColor: '#32305D',
            }}></DiscoverCard>
         <DiscoverCard
            title="All Posts"
            imageSource={require('../assets/discover-imgs/all-posts-2x.png')}
            overlayColor={{
               backgroundColor: '#07936B',
            }}></DiscoverCard>
      </View>
   );
}

const styles = StyleSheet.create({
   align: {
      ...defaultStyles.pageCenter,
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
});
