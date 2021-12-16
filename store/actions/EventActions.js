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
   id,
   eventTitle,
   group,
   date,
   timeStart,
   timeEnd,
   location,
   schedule,
   time1,
   time2,
   time3,
   time4,
   title1,
   title2,
   title3,
   title4,
) => {
   const newEvent = new Event(
      id,
      eventTitle,
      group,
      date,
      timeStart,
      timeEnd,
      location,
      schedule,
      time1,
      time2,
      time3,
      time4,
      title1,
      title2,
      title3,
      title4,
   );
   return async (dispatch, getState) => {
      const token = getState().user.token;
      const response = await fetch(
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/auth=${token}`,
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...newEvent }),
         },
      );
      const data = await response.json();
      !response.ok && console.error(data);
      if (response.ok) {
         dispatch({
            type: ADD_EVENT,
            payload: {
               id,
               eventTitle,
               group,
               date,
               timeStart,
               timeEnd,
               location,
               schedule,
               time1,
               time2,
               time3,
               time4,
               title1,
               title2,
               title3,
               title4,
            },
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
   location,
   schedule,
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
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json?auth=${token}`,
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
               location,
               schedule,
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
               location,
               schedule,
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
         `https://kvaliapp-54605-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json?auth=${token}`,
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
