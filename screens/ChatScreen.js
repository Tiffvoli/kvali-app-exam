import React, { useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
   StyleSheet,
   FlatList,
   SafeAreaView,
   Image,
   Button,
   TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import defaultStyles from '../styles/General';
import ChatRoom from '../components/ChatRoom';
import {
   newChatRoom,
   deleteChatRoom,
   fetchChatRooms,
} from '../store/actions/ChatActions';

export default function ChatScreen(props) {
   const navigation = useNavigation();
   const dispatch = useDispatch();

   React.useEffect(() => {
      //Load chatRooms array from store
      dispatch(fetchChatRooms());
      console.log('chatScreen', chatRooms);
   }, []);

   const chatRooms = useSelector(state => state.chat.chatRooms);

   const [text, onChangeText] = useState('');

   const handleDelete = id => {
      // console.log('delete', id);
      dispatch(deleteChatRoom(id));
   };
   const handleCreate = () => {
      console.log('create', text);
      dispatch(newChatRoom(text));
   };

   return (
      <SafeAreaView
         style={[defaultStyles.pageCenter, defaultStyles.loggedInBackground]}>
         <FlatList
            data={chatRooms}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <>
                  <ChatRoom
                     onPress={() => {
                        navigation.navigate('ChatRoomScreen', {
                           id: item.id,
                           name: item.chatRoomName,
                        });
                     }}
                     titleText={item.chatRoomName}
                     bodyText={item.messages}
                     children={
                        <Image
                           style={styles.image}
                           source={
                              item?.chatRoomName === 'CBS Surf'
                                 ? require('../assets/chat-imgs/cbs-surf.png')
                                 : item?.chatRoomName === 'CBS Feminist Society'
                                 ? require('../assets/chat-imgs/cbs-fem.png')
                                 : item?.chatRoomName === 'CBS Students'
                                 ? require('../assets/chat-imgs/cbs-students.png')
                                 : item?.chatRoomName === 'CBS Golf'
                                 ? require('../assets/chat-imgs/cbs-golf.png')
                                 : item?.chatRoomName === 'CBS Poker'
                                 ? require('../assets/chat-imgs/cbs-poker.png')
                                 : null
                           }
                        />
                     }
                     // timeStamp={
                     // 	item.messages.length > 0
                     // 		? moment(
                     // 				item.messages[item.messages.length - 1].messageTimestamp
                     // 		  ).format("HH:mm")
                     // 		: null
                     // }
                  ></ChatRoom>
                  {/* <Button
              title="Delete"
              onPress={handleDelete.bind(this, item.id)}></Button> */}
               </>
            )}></FlatList>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   image: {
      width: '10.5%',
      height: '100%',
   },
});
