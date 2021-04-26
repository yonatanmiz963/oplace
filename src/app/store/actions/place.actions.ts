import { Action } from '@ngrx/store';
import { Place } from 'src/app/models/place';
import { User } from 'src/app/models/user';

export const SET_LOADING = '[place]s loading';
export const SET_ERROR = '[place]s error';
export const LOAD_PLACES = '[place]s load';
export const LOAD_PLACE = '[place] load';
export const LOADED_PLACE = '[place] loaded';
export const LOADED_PLACES = '[place]s loaded';
export const REMOVE_PLACE = '[place] remove';
export const REMOVED_PLACE = '[place] removed';
export const SAVE_PLACE = '[place] saved';
export const ADDED_PLACE = '[place] added';
export const UPDATED_PLACE = '[place] updated';

export const SIGN_USER = '[user] signup';
export const LOG_USER = '[user] login';
export const SET_USER = '[user] loggedIn';
export const LOG_OUT = '[user] logout';
export const UNSET_USER = '[user] loggedOut';

export type placeAction = loadPlaces | loadPlace | removePlace | savePlace
export type userAction = login | logout | signup


export class loggedIn implements Action {
  readonly type = SET_USER;
  constructor(public user: User) { }
}
export class loggedOut implements Action {
  readonly type = UNSET_USER;
  constructor(public user: User) { }
}
export class login implements Action {
  readonly type = LOG_USER;
  constructor(public user: User) { }
}
export class signup implements Action {
  readonly type = SIGN_USER;
  constructor(public user: User) { }
}
export class logout implements Action {
  readonly type = LOG_OUT;
  constructor(public empty: null) { }
}

export class loadPlaces implements Action {
  readonly type = LOAD_PLACES;
  constructor(public filterBy: string = '') {}
}
export class loadPlace implements Action {
  readonly type = LOAD_PLACE;
  constructor(public placeId: string = '') {}
}
export class removePlace implements Action {
  readonly type = REMOVE_PLACE;
  constructor(public placeId: string) {}
}
export class loadedPlaces implements Action {
  readonly type = LOADED_PLACES;
  constructor(public places: Place[] = []) {}
}
export class loadedPlace implements Action {
  readonly type = LOADED_PLACE;
  constructor(public place: Place) {}
}
export class removedPlace implements Action {
  readonly type = REMOVED_PLACE;
  constructor(public placeId: string) {}
}
export class savePlace implements Action {
  readonly type = SAVE_PLACE;
  constructor(public place: Place) {}
}
export class addedPlace implements Action {
  readonly type = ADDED_PLACE;
  constructor(public place: Place) {}
}
export class updatedPlace implements Action {
  readonly type = UPDATED_PLACE;
  constructor(public place: Place) {}
}
export class loadingPlaces implements Action {
  readonly type = SET_LOADING;
  constructor(public isLoading: boolean = true) {}
}
export class placeError implements Action {
  readonly type = SET_ERROR;
  constructor(public error: string) {}
}

