import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { State } from '../../store/store';
import {loadPlaces, loadPlace, removePlace} from '../../store/actions/place.actions';
import { place } from '../../models/place';

@Component({
  selector: 'place-app',
  templateUrl: './place-app.component.html',
  styleUrls: ['./place-app.component.scss'],
})
export class placeAppComponent implements OnInit {
  places$: Observable<place[]>;
  place$: Observable<place | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  addingNew = false;

  filterBy: string = '';
  // Yaron: Sadly, cannot get placeState here
  constructor(private store: Store<State>) {
    this.places$ = this.store.select('placeState').pipe(pluck('places'));
    this.place$ = this.store.select('placeState').pipe(pluck('place'));
    this.isLoading$ = this.store.select('placeState').pipe(pluck('isLoading'));
    this.error$ = this.store.select('placeState').pipe(pluck('error'));
  }

  ngOnInit(): void {
    console.log('placeApp: dispatching Loadplaces => effects');
    this.store.dispatch(new loadPlaces(this.filterBy));
  }
  removeplace(placeId :string) {
    console.log('placeApp: dispatching remove');
    this.store.dispatch(new removePlace(placeId));
  }
  editplace(placeId :string) {
    console.log('placeApp: dispatching load place (for edit)');
    this.store.dispatch(new loadPlace(placeId));
  }  
}
