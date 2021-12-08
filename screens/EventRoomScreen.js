import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import OutlinedButton from '../components/OutlinedButton';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import EventRoomCard from '../components/EventRoomCard';
import { Ionicons } from '@expo/vector-icons';

const EventRoomScreen = props => {
   const [isInterested, setIsInterested] = React.useState(false);
   const [isGoing, setIsGoing] = React.useState(false);
   const dispatch = useDispatch();

   const { id } = props.route.params;
   const eventRoom = useSelector(state => state.event.eventTitle);
   const user = useSelector(state => state.user.loggedInUser);
   const handleInterested = () => {
      setIsInterested(true);
   };
   const handleChangeStatus = () => {
      console.log('show slide-up list');
   };

   React.useEffect(() => {
      console.log(eventRoom);
   });

   return (
      <View style={styles.container}>
         <EventRoomCard
            collectionName="Surfs Trip 2020"
            title="Christmas with CBS Yoga"
            imageSource={require('../assets/discover-events-imgs/eventcard-placeholder.png')}
            iconAddress={
               <Ionicons name="location-sharp" size={18} color="#333" />
            }
            iconDateTime={<Ionicons name="time-sharp" size={18} color="#333" />}
            date="MAN 12. APR"
            time="12:00 - 14:00"
            address="2000 Frederiksberg"
         />
      </View>
      // <View>
      //    {isGoing || isInterested ? (
      //       <Button
      //          title={isGoing ? 'Going' : 'Interested'}
      //          onPress={handleChangeStatus}
      //          icon={
      //             isGoing ? (
      //                <FontAwesome5
      //                   name="calendar-check"
      //                   size={16}
      //                   color="#fff"
      //                />
      //             ) : (
      //                <AntDesign name="star" size={16} color="#fff" />
      //             )
      //          }
      //          buttonStyle={styles.clsInterested}
      //          secondaryIcon={
      //             <MaterialIcons
      //                name="keyboard-arrow-down"
      //                size={20}
      //                color="#fff"
      //             />
      //          }
      //       />
      //    ) : (
      //       <View View style={styles.btnContainer}>
      //          <OutlinedButton
      //             title="Interested"
      //             onPress={() => setIsInterested(true)}
      //             icon={<AntDesign name="staro" size={16} color="#5050A5" />}
      //             buttonStyle={styles.btnWidth}
      //          />
      //          <OutlinedButton
      //             title="Going"
      //             onPress={() => setIsGoing(true)}
      //             icon={
      //                <FontAwesome5
      //                   name="calendar-check"
      //                   size={16}
      //                   color="#5050A5"
      //                />
      //             }
      //             buttonStyle={styles.btnWidth}
      //          />
      //       </View>
      //    )}
      // </View>
   );
};

export default EventRoomScreen;

const styles = StyleSheet.create({
   btnContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   btnWidth: {
      width: 160,
   },
   clsInterested: {
      width: 'auto',
      padding: 14,
   },
});
