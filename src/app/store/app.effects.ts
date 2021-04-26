import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { placeService } from '../services/place.service';
import { placeAction, SAVE_PLACE, ADDED_PLACE, UPDATED_PLACE, LOAD_PLACES, LOADED_PLACES, REMOVE_PLACE, REMOVED_PLACE, LOAD_PLACE, LOADED_PLACE, SET_ERROR } from './actions/place.actions';

// Nice way to test error handling? localStorage.clear() after places are presented 
@Injectable()
export class AppEffects {

  loadPlaces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_PLACES),
      switchMap((action) =>
        this.placeService.query(action.filterBy).pipe(
          tap(() => console.log('Effects: Got places from service, send it to ===> Reducer')),
          map((places) => ({
            type: LOADED_PLACES,
            places,
          })),
          catchError((error) => {
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      )
    );
  });
  loadPlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_PLACE),
      switchMap((action) =>
        this.placeService.getById(action.placeId).pipe(
          map((place) => ({
            type: LOADED_PLACE,
            place,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  });
  removePlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REMOVE_PLACE),
      switchMap((action) =>
        this.placeService.remove(action.placeId).pipe(
          map(() => ({
            type: REMOVED_PLACE,
            placeId: action.placeId,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  })
  savePlace$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SAVE_PLACE),
      switchMap((action) =>
        this.placeService.save(action.place).pipe(
          map((savedplace) => ({
            type: (action.place._id) ? UPDATED_PLACE : ADDED_PLACE,
            place: savedplace,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })

        )
      )
    );
  })
  constructor(
    private actions$: Actions<placeAction>,
    private placeService: placeService
  ) { }
}
