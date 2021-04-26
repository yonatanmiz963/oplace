import { SET_LOADING, LOADED_PLACES, REMOVED_PLACE, ADDED_PLACE, UPDATED_PLACE, LOADED_PLACE, SET_ERROR } from '../actions/place.actions';
import { Place } from 'src/app/models/place';

export interface placeState {
  places: Place[];
  place: Place | null;
  isLoading: boolean;
  error: string;
}

const initialState: placeState = {
  places: [],
  place: null,
  isLoading: false,
  error: ''
};

export function reducer(state: placeState = initialState, action: any): placeState {
  switch (action.type) {
    case SET_LOADING: {
      const { isLoading } = action;
      return { ...state, isLoading, error: '' };
    } case SET_ERROR: {
      const { error } = action;
      return { ...state, error, isLoading: false };
    } case LOADED_PLACES: {
      const { places } = action;
      return { ...state, places, isLoading: false, error: '' };
    } case LOADED_PLACE: {
      const { place } = action;
      return { ...state, place, error: '' };
    } case REMOVED_PLACE: {
      const { placeId } = action;
      const places = state.places.filter(place => place._id !== placeId)
      return { ...state, places, error: '' };
    } case ADDED_PLACE: {
      const { place } = action;
      const places = [...state.places, place]
      return { ...state, places, error: '' };
    } case UPDATED_PLACE: {
      const { place } = action;
      const places = state.places.map(currplace => (currplace._id === place.id) ? place : currplace)
      return { ...state, places, place: null, error: '' };
    } default:
      return state;
  }
}
