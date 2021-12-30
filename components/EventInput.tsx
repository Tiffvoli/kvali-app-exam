import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import defaultStyles from '../styles/General';

interface Props {
   inputLabel: string;
   value: string;
   placeholder: string;
   errorMessage: string;
   setContent(arg: string): void;
}

export default function EventInput({
   inputLabel,
   value,
   placeholder,
   errorMessage,
   setContent,
}: Props) {
   const [touched, setTouched] = React.useState(false);
   const [IsCreateEventScreen, setIsCreateEventScreen] = React.useState(false);

   const handleChangeText = (enteredText: string) => {
      setTouched(true);
      enteredText === '';
      setContent(enteredText);
   };

   return (
      <View style={[styles.textFieldContainer]}>
         <Text style={[styles.textfieldLabel, defaultStyles.boldText]}>
            {inputLabel}
         </Text>
         <TextInput
            style={styles.textfield}
            value={value}
            onChangeText={handleChangeText}
            onBlur={() => setTouched(true)}
            placeholder={placeholder}></TextInput>

         {/* Error message */}
         {!IsCreateEventScreen && touched && (
            <Text style={defaultStyles.errorMsg}>{errorMessage}</Text>
         )}
      </View>
   );
}

const styles = StyleSheet.create({
   textFieldContainer: {
      flexDirection: 'column',
      paddingVertical: 5,
   },
   textfieldLabel: {
      fontFamily: 'OpenSans-Bold',
      textTransform: 'uppercase',
      color: '#32305D',
      fontWeight: 'bold',
      zIndex: 9,
      position: 'absolute',
      top: 15,
      paddingHorizontal: 10,
   },
   textfield: {
      paddingHorizontal: 10,
      paddingTop: 35,
      paddingBottom: 15,
      color: '#000',
      marginBottom: 5,
      width: '100%',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#EEEEEE',
      textTransform: 'lowercase',
      height: 70,
   },
});
