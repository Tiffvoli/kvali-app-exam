import {
   EVENTS,
   ADD_EVENT,
   EDIT_EVENT,
   DELETE_EVENT,
} from '../actions/EventActions';

interface EventState {
   events: Array<any>;
}

const initialState: EventState = {
   events: [],
};

const EventReducer = (state: EventState = initialState, action: any) => {
   switch (action.type) {
      case EVENTS:
         return { ...state, events: action.payload };
      default:
         return state;

      case ADD_EVENT:
         console.log(action.payload);
         return { ...state, events: action.payload };

      case EDIT_EVENT:
         return { ...state, events: action.payload };

      case DELETE_EVENT:
         return { ...state };
   }
};

export default EventReducer;
