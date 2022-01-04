import Event from '../../models/Event';

export const EVENTS = 'EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

//getting events

export const fetchEvents = () => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-5d4e3-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=${token}`,
         {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
            },
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      if (response.ok) {
         let array = [];
         // Put objects in a new array before dispatching to reducer
         for (const key in data) {
            // Use object's name value as event's ID
            let event = data[key];
            event.id = key;
            // Add objects with id in the newArray
            array.push(event);
         }
         // console.log(array);
         dispatch({ type: EVENTS, payload: array });
      }
   };
};

//adding a new event

export const addEvent = (
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
) => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-5d4e3-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=${token}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               eventTitle: eventTitle,
               group: group,
               imageName: imageName?.toLowerCase(),
               date: date,
               address: address,
               venue: venue,
               timeStart: timeStart,
               timeEnd: timeEnd,
               description: description,
               title1: title1,
               time1: time1,
               title2: title2,
               time2: time2,
               title3: title3,
               time3: time3,
               title4: title4,
               time4: time4,
               author: author,
            }),
         },
      );
      const data = await response.json();
      console.log(data);
      !response.ok && console.error(data);
      if (response.ok) {
         const newEvent = new Event(
            data.name,
            eventTitle,
            group,
            imageName?.toLowerCase(),
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
         );
         dispatch({
            type: ADD_EVENT,
            payload: { newEvent },
         });
      }
   };
};

//editing an event

export const editEvent = (
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
) => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-5d4e3-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json?auth=${token}`,
         {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
               author: id,
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
            }),
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      console.log('patch', data);
      if (response.ok) {
         dispatch({
            type: EDIT_EVENT,
            payload: data,
         });
      }
   };
};

//deleting an event

export const deleteEvent = id => {
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-5d4e3-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json?auth=${token}`,
         {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
            },
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      console.log('delete', data);
      if (response.ok) {
         dispatch({
            type: DELETE_EVENT,
            payload: data,
         });
      }
   };
};
