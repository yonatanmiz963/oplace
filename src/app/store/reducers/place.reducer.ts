import { SET_LOADING, LOADED_PLACES, REMOVED_PLACE, ADDED_PLACE, UPDATED_PLACE, LOADED_PLACE, SET_ERROR, UNSET_USER, SET_USER } from '../actions/place.actions';
import { Place } from 'src/app/models/place';
import { User } from 'src/app/models/user';

export interface placeState {
  places: Place[];
  place: Place | null;
  isLoading: boolean;
  error: string;
  user: User | null;

}

const initialState: placeState = {
  places: [],
  place: null,
  isLoading: false,
  error: '',
  user: null
};

export function reducer(state: placeState = initialState, action: any): placeState {
  switch (action.type) {
    case SET_LOADING: {
      const { isLoading } = action;
      console.log(`Reducer: Setting isLoading to ${isLoading}`);
      return { ...state, isLoading, error: '' };
    } case SET_ERROR: {
      const { error } = action;
      console.log(`Reducer: Setting place error`, error);
      return { ...state, error, isLoading: false };
    } case LOADED_PLACES: {
      const { places } = action;
      console.log(`Reducer: Setting loaded places (${places.length}) places`);
      return { ...state, places, isLoading: false, error: '' };
    } case LOADED_PLACE: {
      const { place } = action;
      console.log(`Reducer: Setting loaded place ${place.id}`);
      return { ...state, place, error: '' };
    } case REMOVED_PLACE: {
      const { placeId } = action;
      console.log('Reducer: Removing place:', placeId);
      const places = state.places.filter(place => place._id !== placeId)
      return { ...state, places, error: '' };
    } case ADDED_PLACE: {
      const { place } = action;
      console.log('Reducer: Adding place:', place);
      const places = [...state.places, place]
      return { ...state, places, error: '' };
    } case UPDATED_PLACE: {
      const { place } = action;
      console.log('Reducer: Updating place:', place);
      const places = state.places.map(currplace => (currplace._id === place.id) ? place : currplace)
      return { ...state, places, place: null, error: '' };
    } case SET_USER: {
      const { user } = action;
      console.log(`Reducer: Setting loaded user ${user._id}`);
      return { ...state, user };
    } case UNSET_USER: {
      console.log('Reducer: Unsetting user');
      const user = null
      return { ...state, user };
    } default:
      return state;
  }
}
