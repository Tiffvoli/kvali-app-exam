import React from 'react';
import {
   StyleSheet,
   View,
   TouchableOpacity,
   Text,
   ImageBackground,
   Dimensions,
   Pressable,
} from 'react-native';
import defaultStyles from '../styles/General';
import OutlinedButton from '../components/OutlinedButton';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

interface Props {
   title: string;
   groupName: string;
   collectionName: string;
   date: string;
   time: string;
   address: string;
   imageSource: { uri: string };
   iconDateTime: (arg: any) => void;
   iconAddress: (arg: any) => void;
   onPress: (arg: any) => void;
}

export default function EventRoomCard({
   title,
   groupName,
   collectionName,
   date,
   time,
   address,
   iconDateTime,
   iconAddress,
   imageSource,
   onPress,
}: Props) {
   const [isInterested, setIsInterested] = React.useState(false);
   const [isGoing, setIsGoing] = React.useState(false);
   const handleChangeStatus = () => {
      console.log('show slide-up list');
   };
   return (
      <View style={styles.container}>
         <Pressable style={[styles.headerBar, defaultStyles.lightShadow]}>
            <View>
               <Text style={defaultStyles.H2}>Part of collection</Text>
               <Text style={[defaultStyles.boldText, defaultStyles.whiteText]}>
                  {collectionName}
               </Text>
            </View>
            <View style={styles.purpleBtn}>
               <Text
                  style={[
                     defaultStyles.boldText,
                     defaultStyles.whiteText,
                     defaultStyles.centerText,
                  ]}>
                  See collection
               </Text>
            </View>
         </Pressable>
         <View style={styles.imageWrapper}>
            <ImageBackground
               source={imageSource}
               resizeMode="cover"
               style={styles.image}></ImageBackground>
         </View>
         <View style={styles.contentWrapper}>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.iconTextWrapper]}>
               <View style={styles.icons}>{iconDateTime}</View>
               <Text
                  style={[
                     defaultStyles.boldText,
                     defaultStyles.darkText,
                     styles.datetimeText,
                  ]}>
                  {date} • {time}
               </Text>
            </View>
            {/* TODO: truncate address */}
            <View style={[styles.iconTextWrapper]}>
               <View style={styles.icons}>{iconAddress}</View>
               <Text
                  style={[defaultStyles.darkText, styles.addressText]}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {address}
               </Text>
            </View>

            {/* //going/ interested */}
            <View>
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
         </View>
      </View>
   );
}
const win = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
      //   flexDirection: 'column',
      //   justifyContent: 'flex-end',
      //   borderRadius: 5,
      //   alignSelf: 'stretch',
      //   paddingBottom: 5,
      height: win.height,
   },
   contentWrapper: {
      margin: 20,
   },
   headerBar: {
      backgroundColor: '#32305D',
      height: 64,
      padding: 14,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   purpleBtn: {
      backgroundColor: '#FFFFFF10',
      height: 40,
      width: 122,
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: 5,
   },
   iconTextWrapper: {
      paddingBottom: 3,
      flexDirection: 'row',
      alignItems: 'center',
      // maxWidth: 280,
   },
   titleWrapper: {
      paddingBottom: 3,
      flexDirection: 'column',
   },
   title: {
      zIndex: 999,
      fontSize: 37,
      fontFamily: 'Teko-Medium',
      color: '#333333',
   },
   groupName: { fontFamily: 'OpenSans-Bold' },
   datetimeText: {
      textTransform: 'uppercase',
      fontSize: 16,
   },
   addressText: {
      ...defaultStyles.boldText,
      flex: 1,
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
   },
   icons: {
      marginRight: 5,
   },
   imageWrapper: {
      height: 164,
      width: win.width,
   },
   image: {
      width: win.width,
      flex: 1,
      justifyContent: 'center',
      height: '100%',
   },
   background: {
      borderRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      position: 'absolute',
      height: 174,
      top: 0,
      left: 0,
      right: 0,
   },
   btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
   },
   btnWidth: {
      width: 170,
   },
   clsInterested: {
      width: 'auto',
   },
});
