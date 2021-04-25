import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { place } from '../models/place';
import { loadingPlaces } from '../store/actions/place.actions';
import { placeState } from '../store/reducers/place.reducer';

import { storageService } from './async-storage.service'

const ENTITY = 'place'
@Injectable({
  providedIn: 'root',
})
export class placeService {
  constructor(private store: Store<placeState>) {
    // If empty - load test data to storage
    const places = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!places || places.length === 0) {
      console.log('BUU');
      localStorage.setItem(ENTITY, JSON.stringify(this.createPlaces()))
    }
  }
  query(filterBy = ''): Observable<place[]> {
    this.store.dispatch(new loadingPlaces());
    console.log('placeService: Return places ===> effect');
    return from(storageService.query(ENTITY) as Promise<place[]>)
    // return new Observable((observer) => observer.next(places));
  }
  getById(placeId: string): Observable<place> {
    console.log('placeService: Return place ===> effect');
    return from(storageService.get(ENTITY, placeId) as Promise<place>)
  }
  remove(placeId: string): Observable<boolean> {
    console.log('placeService: Removing places ===> effect');
    return from(storageService.remove(ENTITY, placeId))
  }

  save(place: place): Observable<place> {
    const method = (place.id) ? 'put' : 'post'
    const prmSavedplace = storageService[method](ENTITY, place)
    console.log('placeService: Saving place ===> effect');
    return from(prmSavedplace) as Observable<place>
  }

  private createPlaces(): place[] {
    return ['Vue', 'Angular', 'React', 'Redux', 'NGRX', 'Vuex']
      .map(txt => ({id: storageService.makeId(), txt}))
  }
  get emptyplace(): place {
    return {
      id: '',
      txt: ''
    }
  }
}
