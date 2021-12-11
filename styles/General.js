import { StyleSheet } from 'react-native';

export default generalStyles = StyleSheet.create({
   headerH1: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#32305D',
      fontFamily: 'Teko-Medium',
   },
   H2: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#BABADB',
      fontFamily: 'Teko-Medium',
      textTransform: 'uppercase',
   },
   normalText: {
      fontSize: 12,
      fontFamily: 'OpenSans-Regular',
   },
   boldText: {
      fontSize: 12,
      fontFamily: 'OpenSans-Bold',
   },
   whiteText: {
      color: '#fff',
   },
   darkText: {
      color: '#333',
   },
   centerText: {
      textAlign: 'center',
   },
   bodyText: {
      fontSize: 14,
      fontFamily: 'OpenSans-Regular',
   },
   pageCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   loggedInBackground: {
      backgroundColor: '#F5F5F5',
   },
   welcomeBackground: {
      backgroundColor: '#fff',
   },
   input: {
      height: 40,
      backgroundColor: 'lightgray',
      margin: 12,
      borderWidth: 1,
      borderColor: 'lightgray',
      padding: 10,
      width: 333,
   },
   formInput: {
      padding: 18,
      width: 374,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#EEEEEE',
      textTransform: 'lowercase',
   },
   formInputLogIn: {
      paddingHorizontal: 18,
      paddingTop: 38,
      paddingBottom: 20,
      width: 374,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#EEEEEE',
      textTransform: 'lowercase',
   },
   fieldset: {
      flexDirection: 'column',
      padding: 0,
      width: '100%',
      margin: 20,
      borderWidth: 0.5,
      borderColor: '#EEEEEE',
      borderRadius: 5,
   },
   btnPrimary: {
      width: 374,
      textAlign: 'left',
      backgroundColor: '#5050A5',
      padding: 18,
      borderRadius: 5,
      margin: 10,
   },
   btnPrimaryContent: { color: '#fff', fontWeight: '600' },
   btnLink: {
      fontWeight: 'bold',
      color: '#5050A5',
   },
   btnEvent: {
      width: 372,
      textAlign: 'left',
      backgroundColor: '#5050A5',
      padding: 18,
      borderRadius: 5,
      marginRight: 20,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
   },
   lightShadow: {
      shadowColor: '#AAAAAA29',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,

      elevation: 3,
   },
   btnPurple: {
      backgroundColor: '#5050A5',
   },
});

// export default generalStyles;
