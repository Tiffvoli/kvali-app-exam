import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   FlatList,
   ScrollView,
   Pressable,
} from 'react-native';
import { editEvent } from '../store/actions/EventActions';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

import EventInput from '../components/EventInput';
import defaultStyles from '../styles/General';

const EditEventScreen = props => {
   const dispatch = useDispatch();
   const navigation = useNavigation();
   React.useEffect(() => {});

   let eventId = props.route.params.eventTitle;

   const editDetails = useSelector(state => state?.event?.events).find(
      event => event?.eventTitle === eventId,
   );

   //    console.log(editDetails);

   const user = useSelector(state => state.user.loggedInUser);
   const id = editDetails?.id;
   const [eventTitle, onChangeventTitle] = React.useState(
      editDetails?.eventTitle,
   );
   const [group, onChangeGroup] = React.useState(editDetails?.group);
   const imageName = editDetails?.imageName;
   const [date, onChangeDate] = React.useState(editDetails?.date);
   const [address, onChangeAddress] = React.useState(editDetails?.address);
   const [venue, onChangeVenue] = React.useState(editDetails?.venue);
   const [timeStart, onChangeTimeStart] = React.useState(
      editDetails?.timeStart,
   );
   const [timeEnd, onChangeTimeEnd] = React.useState(editDetails?.timeEnd);
   const [description, onChangeDescription] = React.useState(
      editDetails?.description,
   );
   const [title1, onChangeTitle1] = React.useState(editDetails?.title1);
   const [time1, onChangeTime1] = React.useState(editDetails?.time1);
   const [title2, onChangeTitle2] = React.useState(editDetails?.title2);
   const [time2, onChangeTime2] = React.useState(editDetails?.time2);
   const [title3, onChangeTitle3] = React.useState(editDetails?.title3);
   const [time3, onChangeTime3] = React.useState(editDetails?.time3);
   const [title4, onChangeTitle4] = React.useState(editDetails?.title4);
   const [time4, onChangeTime4] = React.useState(editDetails?.time4);
   const author = editDetails?.author;

   const editCurrentEvent = () => {
      // Attach and Send to Actions
      dispatch(
         editEvent(
            id,
            eventTitle,
            group,
            imageName,
            date,
            address,
            venue,
            timeStart,
            timeEnd,
            description,
            title1,
            time1,
            title2,
            time2,
            title3,
            time3,
            title4,
            time4,
            author,
         ),
      ) && navigation.navigate('EventsScreen');
   };

   return (
      <ScrollView>
         <View style={defaultStyles.pageCenter}>
            <View style={[defaultStyles.fieldset, defaultStyles.lightShadow]}>
               <Text style={[defaultStyles.headerH1, styles.titleAlign]}>
                  Edit the event
               </Text>
               <EventInput
                  style={styles.textfield}
                  inputLabel="Title"
                  placeholder={editDetails?.eventTitle}
                  value={eventTitle}
                  setContent={eventTitle => onChangeventTitle(eventTitle)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Group"
                  placeholder={editDetails?.group}
                  value={group}
                  setContent={group => onChangeGroup(group)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Date"
                  placeholder="MM/DD/YYYY"
                  value={date}
                  setContent={date => onChangeDate(date)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Address"
                  placeholder={editDetails?.address}
                  value={address}
                  setContent={address => onChangeAddress(address)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Venue"
                  placeholder={editDetails?.venue}
                  value={venue}
                  setContent={venue => onChangeVenue(venue)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Start Time"
                  placeholder={editDetails?.timeStart}
                  value={timeStart}
                  setContent={timeStart => onChangeTimeStart(timeStart)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="End Time"
                  placeholder={editDetails?.timeEnd}
                  value={timeEnd}
                  setContent={timeEnd => onChangeTimeEnd(timeEnd)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Description"
                  placeholder={editDetails?.description}
                  value={description}
                  setContent={description => onChangeDescription(description)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Title"
                  placeholder={editDetails?.title1}
                  value={title1}
                  setContent={title1 => onChangeTitle1(title1)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder={editDetails?.time1}
                  value={time1}
                  setContent={time1 => onChangeTime1(time1)}
                  setIsCreateEventScreen={true}
               />

               <EventInput
                  inputLabel="Title"
                  placeholder={editDetails?.title2}
                  value={title2}
                  setContent={title2 => onChangeTitle2(title2)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder={editDetails?.time2}
                  value={time2}
                  setContent={time2 => onChangeTime2(time2)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Title"
                  placeholder={editDetails?.title3}
                  value={title3}
                  setContent={title3 => onChangeTitle3(title3)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder={editDetails?.time3}
                  value={time3}
                  setContent={time3 => onChangeTime3(time3)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Title"
                  placeholder={editDetails?.title4}
                  value={title4}
                  setContent={title4 => onChangeTitle4(title4)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder={editDetails?.time4}
                  value={time4}
                  setContent={time4 => onChangeTime4(time4)}
                  setIsCreateEventScreen={true}
               />
               <Pressable
                  style={[
                     defaultStyles.btnPrimary,
                     defaultStyles.lightShadow,
                     styles.btn,
                  ]}
                  onPress={editCurrentEvent}>
                  <Text
                     style={[
                        defaultStyles.btnPrimaryContent,
                        defaultStyles.centerText,
                     ]}>
                     Edit
                  </Text>
               </Pressable>
            </View>
         </View>
      </ScrollView>
   );
};

export default EditEventScreen;

const styles = StyleSheet.create({
   titleAlign: {
      alignSelf: 'flex-start',
   },
   btn: {
      width: '100%',
      paddingVertical: 15,
      alignSelf: 'center',
   },
});
