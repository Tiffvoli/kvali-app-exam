import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   FlatList,
   ScrollView,
   Pressable,
} from 'react-native';
import { fetchEvents } from '../store/actions/EventActions';

import { useDispatch, useSelector } from 'react-redux';
import EventRoomCard from '../components/EventRoomCard';
import defaultStyles from '../styles/General';
import InterestGoing from '../components/InterestGoingCard';
import Collapsible from '../components/Collapsible';
import Schedule from '../components/Schedule';

import { Ionicons } from '@expo/vector-icons';
import OutlinedButton from '../components/OutlinedButton';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

const EventRoomScreen = props => {
   const dispatch = useDispatch();
   React.useEffect(() => {});

   let eventId = props.route.params.eventTitle;

   const eventDetails = useSelector(state => state?.event?.events).find(
      event => event?.eventTitle === eventId,
   );
   // console.log(eventId);
   const user = useSelector(state => state.user.loggedInUser);
   const [isInterested, setIsInterested] = React.useState(false);
   const [isGoing, setIsGoing] = React.useState(false);
   const dateTimeOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
   };
   // const handleChangeStatus = () => {

   // };

   return (
      <ScrollView>
         <View style={styles.headerContainer} scrollEnabled={true}>
            <EventRoomCard
               collectionName={eventDetails?.group}
               title={eventDetails?.eventTitle}
               imageSource={
                  (eventDetails?.imageName === 'social-res-event' &&
                     require('../assets/discover-events-imgs/social-res-event.png')) ||
                  (eventDetails?.imageName === 'cbs-film-ghost' &&
                     require('../assets/discover-events-imgs/cbs-film-ghost.png')) ||
                  (eventDetails?.imageName === 'dansic-bootcamp' &&
                     require('../assets/discover-events-imgs/dansic-bootcamp.png')) ||
                  (eventDetails?.imageName === 'cbs-art-event' &&
                     require('../assets/discover-events-imgs/cbs-art-event.png')) ||
                  (eventDetails?.imageName === 'cbs-yoga-event' &&
                     require('../assets/discover-events-imgs/cbs-yoga-event.png')) ||
                  (eventDetails?.imageName === 'cbs-surf' &&
                     require('../assets/discover-events-imgs/cbs-surf.png')) ||
                  (eventDetails?.imageName === 'cbs-film-oldboy' &&
                     require('../assets/discover-events-imgs/cbs-film-oldboy.png')) ||
                  (eventDetails?.imageName === 'cbs-default' &&
                     require('../assets/discover-events-imgs/cbs-default.jpeg'))
               }
               iconAddress={
                  <Ionicons name="location-sharp" size={18} color="#333" />
               }
               iconDateTime={
                  <Ionicons name="time-sharp" size={18} color="#333" />
               }
               date={new Date(eventDetails?.date).toLocaleDateString(
                  'da-DK',
                  dateTimeOptions,
               )}
               time={eventDetails?.timeStart + ' - ' + eventDetails?.timeEnd}
               address={eventDetails?.address}
            />

            {/* Interest/Going Dropdown */}
            {/* going/ interested */}
            <View style={styles.whiteContainer}>
               {isGoing || isInterested ? (
                  <Button
                     title={isGoing ? 'Going' : 'Interested'}
                     onPress={handleChangeStatus}
                     icon={
                        isGoing ? (
                           <FontAwesome5
                              name="calendar-check"
                              size={16}
                              color="#fff"
                           />
                        ) : (
                           <AntDesign name="star" size={16} color="#fff" />
                        )
                     }
                     buttonStyle={styles.clsInterested}
                     secondaryIcon={
                        <MaterialIcons
                           name="keyboard-arrow-down"
                           size={20}
                           color="#fff"
                        />
                     }
                  />
               ) : (
                  <View style={styles.btnContainer}>
                     <OutlinedButton
                        title="Interested"
                        onPress={() => setIsInterested(true)}
                        icon={
                           <AntDesign name="staro" size={16} color="#5050A5" />
                        }
                        buttonStyle={styles.btnWidth}
                     />
                     <OutlinedButton
                        title="Going"
                        onPress={() => setIsGoing(true)}
                        icon={
                           <FontAwesome5
                              name="calendar-check"
                              size={16}
                              color="#5050A5"
                           />
                        }
                        buttonStyle={styles.btnWidth}
                     />
                  </View>
               )}
            </View>

            {/* number of interested/going */}

            <View style={styles.flexContainer}>
               <InterestGoing
                  icon={<AntDesign name="star" size={13} color="#5050A5" />}
                  number="18"
                  title="Interested"
               />
               <Text>•</Text>
               <InterestGoing
                  icon={
                     <FontAwesome5
                        name="calendar-check"
                        size={16}
                        color="#5050A5"
                     />
                  }
                  number="456"
                  title="Going"
               />
            </View>

            {/* long description for event */}

            <Collapsible description={eventDetails?.description} />

            {/* schedule */}
            <Schedule
               title1={eventDetails?.title1}
               time1={eventDetails?.time1}
               title2={eventDetails?.title2}
               time2={eventDetails?.time2}
               title3={eventDetails?.title3}
               time3={eventDetails?.time3}
               title4={eventDetails?.title4}
               time4={eventDetails?.time4}
            />
            <Pressable
               style={[defaultStyles.btnRemove, defaultStyles.lightShadow]}>
               <Text
                  style={[
                     defaultStyles.btnPrimaryContent,
                     defaultStyles.centerText,
                  ]}>
                  Remove the event
               </Text>
            </Pressable>
         </View>
      </ScrollView>
   );
};

export default EventRoomScreen;

const styles = StyleSheet.create({
   headerContainer: {
      backgroundColor: '#f5f5f5',
      paddingBottom: 20,
   },
   whiteContainer: {
      backgroundColor: '#fff',
   },
   btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
   },
   btnWidth: {
      width: 180,
   },
   clsInterested: {
      width: 'auto',
      padding: 14,
   },
   flexContainer: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 20,
   },
});
