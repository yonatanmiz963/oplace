import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as placeModule from './reducers/place.reducer';

import { environment } from '../../environments/environment';

export interface State {
  placeState: placeModule.placeState;
}

export const reducers: ActionReducerMap<State> = {
  placeState: placeModule.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
