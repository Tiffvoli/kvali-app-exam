import Event from '../../models/Event';

export const EVENTS = 'EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const EDIT_EVENT = 'EDIT_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

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
         for (const key in data) {
            let event = data[key];
            event.id = key;
            array.push(event);
         }
         // console.log(array);
         dispatch({ type: EVENTS, payload: array });
      }
   };
};

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
         );
         dispatch({
            type: ADD_EVENT,
            payload: { newEvent },
         });
      }
   };
};

export const editEvent = (
   id,
   eventTitle,
   group,
   date,
   timeStart,
   timeEnd,
   address,
   venue,
   time1,
   time2,
   time3,
   time4,
   title1,
   title2,
   title3,
   title4,
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
               date,
               timeStart,
               timeEnd,
               address,
               venue,
               time1,
               time2,
               time3,
               time4,
               title1,
               title2,
               title3,
               title4: id,
               eventTitle,
               group,
               date,
               timeStart,
               timeEnd,
               address,
               venue,
               time1,
               time2,
               time3,
               time4,
               title1,
               title2,
               title3,
               title4,
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
