import React from 'react';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

import { Link } from '@react-navigation/native';
import defaultStyles from '../styles/General';
import * as SecureStore from 'expo-secure-store';

import { restoreUser, refreshToken } from '../store/actions/UserActions';
import { useDispatch } from 'react-redux';
import { addEvent } from '../store/actions/EventActions';

export default function CreateEventScreen() {
   const dispatch = useDispatch();
   const navigation = useNavigation();

   const [eventTitle, onChangeventTitle] = React.useState('');
   const [group, onChangeGroup] = React.useState('');
   const [location, onChangeLocation] = React.useState('');
   const [date, onChangeDate] = React.useState('');
   const [timeStart, onChangeTimeStart] = React.useState('');
   const [timeEnd, onChangeTimeEnd] = React.useState('');
   const [time1, onChangeTime1] = React.useState('');
   const [title1, onChangeTitle1] = React.useState('');
   const [time2, onChangeTime2] = React.useState('');
   const [title2, onChangeTitle2] = React.useState('');
   const [time3, onChangeTime3] = React.useState('');
   const [title3, onChangeTitle3] = React.useState('');
   const [time4, onChangeTime4] = React.useState('');
   const [title4, onChangeTitle4] = React.useState('');
   const addNewEvent = () => {
      // Attach and Send to Actions
      dispatch(
         addEvent(
            eventTitle,
            group,
            location,
            date,
            timeStart,
            timeEnd,
            time1,
            title1,
            time2,
            title2,
            time3,
            title3,
            time4,
            title4,
         ) && navigation.navigate('EventsScreen'),
      );
   };

   return (
      <View style={[defaultStyles.pageCenter, defaultStyles.welcomeBackground]}>
         <Text style={[defaultStyles.headerH1, styles.titleAlign]}>Log in</Text>
         <View style={[defaultStyles.fieldset, defaultStyles.lightShadow]}>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeventTitle(v)}
               value={eventTitle}
               placeholder="Title"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeGroup(v)}
               secureTextEntry={true}
               value={group}
               placeholder="Group"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeLocation(v)}
               value={location}
               placeholder="Location"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeDate(v)}
               secureTextEntry={true}
               value={date}
               placeholder="Date"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTimeStart(v)}
               value={timeStart}
               placeholder="Time Start"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTimeEnd(v)}
               secureTextEntry={true}
               value={timeEnd}
               placeholder="Time End"></TextInput>
            <TextInput>Schedule</TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTime1(v)}
               value={time1}
               placeholder="Time"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTitle1(v)}
               secureTextEntry={true}
               value={title1}
               placeholder="Activity"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTime2(v)}
               value={time2}
               placeholder="Time"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTitle2(v)}
               secureTextEntry={true}
               value={title2}
               placeholder="Activity"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTime3(v)}
               value={time3}
               placeholder="Time"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTitle3(v)}
               secureTextEntry={true}
               value={title3}
               placeholder="Activity"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTime4(v)}
               value={time4}
               placeholder="Time"></TextInput>
            <TextInput
               style={defaultStyles.formInputLogIn}
               onChangeText={v => onChangeTitle4(v)}
               secureTextEntry={true}
               value={title4}
               placeholder="Activity"></TextInput>
         </View>
         <Pressable
            style={[defaultStyles.btnPrimary, defaultStyles.lightShadow]}
            onPress={addNewEvent}>
            <Text style={defaultStyles.btnPrimaryContent}>Add Event</Text>
         </Pressable>
      </View>
   );
}
