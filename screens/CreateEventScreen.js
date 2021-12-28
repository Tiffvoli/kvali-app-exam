import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Pressable,
   TextInput,
   ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../store/actions/EventActions';

import defaultStyles from '../styles/General';
import EventInput from '../components/EventInput';

export default function CreateEventScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation();
   const user = useSelector(state => state.user.loggedInUser);

   const [eventTitle, onChangeventTitle] = React.useState('');
   const [group, onChangeGroup] = React.useState('');
   const imageName = 'cbs-default';
   const [date, onChangeDate] = React.useState('');
   const [address, onChangeAddress] = React.useState('');
   const [venue, onChangeVenue] = React.useState('');
   const [timeStart, onChangeTimeStart] = React.useState('');
   const [timeEnd, onChangeTimeEnd] = React.useState('');
   const [description, onChangeDescription] = React.useState('');
   const [title1, onChangeTitle1] = React.useState('');
   const [time1, onChangeTime1] = React.useState('');
   const [title2, onChangeTitle2] = React.useState('');
   const [time2, onChangeTime2] = React.useState('');
   const [title3, onChangeTitle3] = React.useState('');
   const [time3, onChangeTime3] = React.useState('');
   const [title4, onChangeTitle4] = React.useState('');
   const [time4, onChangeTime4] = React.useState('');
   const author = user.email;

   const addNewEvent = () => {
      // Attach and Send to Actions
      dispatch(
         addEvent(
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
                  Creat an event
               </Text>
               <EventInput
                  inputLabel="Title"
                  placeholder="Enter the title"
                  value={eventTitle}
                  setContent={content => onChangeventTitle(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Group"
                  placeholder="Enter group"
                  value={group}
                  setContent={content => onChangeGroup(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Date"
                  placeholder="MM/DD/YYYY"
                  value={date}
                  setContent={content => onChangeDate(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Address"
                  placeholder="Enter address"
                  value={address}
                  setContent={content => onChangeAddress(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Venue"
                  placeholder="Enter venue"
                  value={venue}
                  setContent={content => onChangeVenue(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Start Time"
                  placeholder="e.g: 12:00"
                  value={timeStart}
                  setContent={content => onChangeTimeStart(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="End Time"
                  placeholder="e.g: 15:00"
                  value={timeEnd}
                  setContent={content => onChangeTimeEnd(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Description"
                  placeholder="Enter description"
                  value={description}
                  setContent={content => onChangeDescription(content)}
                  setIsCreateEventScreen={true}
               />

               <Text style={[defaultStyles.H2, styles.subtitleText]}>
                  Schedule
               </Text>

               <EventInput
                  inputLabel="Title"
                  placeholder="Enter name"
                  value={title1}
                  setContent={content => onChangeTitle1(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder="Enter time"
                  value={time1}
                  setContent={content => onChangeTime1(content)}
                  setIsCreateEventScreen={true}
               />

               <EventInput
                  inputLabel="Title"
                  placeholder="Enter name"
                  value={title2}
                  setContent={content => onChangeTitle2(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder="Enter time"
                  value={time2}
                  setContent={content => onChangeTime2(content)}
                  setIsCreateEventScreen={true}
               />

               <EventInput
                  inputLabel="Title"
                  placeholder="Enter name"
                  value={title3}
                  setContent={content => onChangeTitle3(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder="Enter time"
                  value={time3}
                  setContent={content => onChangeTime3(content)}
                  setIsCreateEventScreen={true}
               />

               <EventInput
                  inputLabel="Title"
                  placeholder="Enter name"
                  value={title4}
                  setContent={content => onChangeTitle4(content)}
                  setIsCreateEventScreen={true}
               />
               <EventInput
                  inputLabel="Time"
                  placeholder="Enter time"
                  value={time4}
                  setContent={content => onChangeTime4(content)}
                  setIsCreateEventScreen={true}
               />
            </View>
            <Pressable
               style={[
                  defaultStyles.btnPrimary,
                  defaultStyles.lightShadow,
                  styles.btn,
               ]}
               onPress={addNewEvent}>
               <Text
                  style={[
                     defaultStyles.btnPrimaryContent,
                     defaultStyles.centerText,
                  ]}>
                  Add event
               </Text>
            </Pressable>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   titleAlign: {
      alignSelf: 'flex-start',
   },
   subtitleText: {
      alignSelf: 'flex-start',
      fontSize: 20,
      color: '#32305D',
      marginVertical: 10,
   },
   flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
   },
   btn: {
      width: '100%',
   },
});

//   <EventInput
//    inputLabel="Image"
//    placeholder="cbs-default"
//    value={imageName}
//    setContent={imageName}
//    setIsCreateEventScreen={true}
// />

//    <EventInput
//    inputLabel="Author"
//    placeholder={user.email}
//    value={author}
//    setContent={author}
//    setIsCreateEventScreen={true}
// />
