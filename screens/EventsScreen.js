import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/actions/EventActions';
import { useNavigation } from '@react-navigation/core';
import { Link } from '@react-navigation/native';
import defaultStyles from '../styles/General';
import { StyleSheet, View, FlatList, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EventCard from '../components/EventCard';

export default function EventsScreen() {
   const navigation = useNavigation();
   const dispatch = useDispatch();
   React.useEffect(() => {
      dispatch(fetchEvents());
   });

   const events = useSelector(state => state?.event?.events);
   const dateTimeOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
   };

   return (
      <View style={styles.container}>
         <Link
            style={[defaultStyles.btnEvent, defaultStyles.whiteText]}
            to={{ screen: 'CreateEventScreen' }}>
            Create an event
         </Link>

         <View style={{ flex: 1 }}>
            <FlatList
               data={events}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <EventCard
                     title={item?.eventTitle}
                     groupName={item?.group}
                     iconAddress={
                        <Ionicons
                           name="location-sharp"
                           size={18}
                           color="#fff"
                        />
                     }
                     iconDateTime={
                        <Ionicons name="time-sharp" size={18} color="#fff" />
                     }
                     date={new Date(item?.date).toLocaleDateString(
                        'da-DK',
                        dateTimeOptions,
                     )}
                     time={item?.timeStart + ' - ' + item?.timeEnd}
                     address={item?.venue + ', ' + item?.address}
                     // imageSrc={
                     //    "require('../assets/discover-events-imgs/" +
                     //    item?.imageName +
                     //    "')"
                     // }
                     imageSrc={
                        (item?.imageName === 'social-res-event' &&
                           require('../assets/discover-events-imgs/social-res-event.png')) ||
                        (item?.imageName === 'cbs-film-ghost' &&
                           require('../assets/discover-events-imgs/cbs-film-ghost.png')) ||
                        (item?.imageName === 'dansic-bootcamp' &&
                           require('../assets/discover-events-imgs/dansic-bootcamp.png')) ||
                        (item?.imageName === 'cbs-art-event' &&
                           require('../assets/discover-events-imgs/cbs-art-event.png')) ||
                        (item?.imageName === 'cbs-yoga-event' &&
                           require('../assets/discover-events-imgs/cbs-yoga-event.png')) ||
                        (item?.imageName === 'cbs-surf' &&
                           require('../assets/discover-events-imgs/cbs-surf.png')) ||
                        (item?.imageName === 'cbs-film-oldboy' &&
                           require('../assets/discover-events-imgs/cbs-film-oldboy.png')) ||
                        (item?.imageName === 'cbs-default' &&
                           require('../assets/discover-events-imgs/cbs-default.jpeg'))
                     }
                     //on press
                     onPress={() =>
                        navigation.navigate('EventRoomScreen', {
                           eventTitle: item?.eventTitle,
                        })
                     }
                  />
               )}
               scrollEnabled={true}></FlatList>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 10,
   },
});

// imageSrc={
//    (item?.imageName === 'social-res-event' &&
//       require('../assets/discover-events-imgs/social-res-event.png')) ||
//    (item?.imageName === 'cbs-film-ghost' &&
//       require('../assets/discover-events-imgs/cbs-film-ghost.png')) ||
//    (item?.imageName === 'dansic-bootcamp' &&
//       require('../assets/discover-events-imgs/dansic-bootcamp.png')) ||
//    (item?.imageName === 'cbs-art-event' &&
//       require('../assets/discover-events-imgs/cbs-art-event.png')) ||
//    (item?.imageName === 'cbs-yoga-event' &&
//       require('../assets/discover-events-imgs/cbs-yoga-event.png')) ||
//    (item?.imageName === 'cbs-surf' &&
//       require('../assets/discover-events-imgs/cbs-surf.png')) ||
//    (item?.imageName === 'cbs-film-oldboy' &&
//       require('../assets/discover-events-imgs/cbs-film-oldboy.png'))
// }
