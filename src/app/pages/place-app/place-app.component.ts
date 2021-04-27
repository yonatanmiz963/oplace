import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { State } from '../../store/store';
import { loadPlaces, loadPlace, removePlace } from '../../store/actions/place.actions';
import { Place } from '../../models/place';

@Component({
  selector: 'place-app',
  templateUrl: './place-app.component.html',
  styleUrls: ['./place-app.component.scss'],
})
export class PlaceAppComponent implements OnInit {
  places$: Observable<Place[]>;
  place$: Observable<Place | null>;
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
    this.store.dispatch(new loadPlaces(this.filterBy));
  }
  removeplace(placeId :string) {
    this.store.dispatch(new removePlace(placeId));
  }

}
