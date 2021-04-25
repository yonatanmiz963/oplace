import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { place } from '../models/place';
import { loadingPlaces } from '../store/actions/place.actions';
import { placeState } from '../store/reducers/place.reducer';

import { storageService } from './async-storage.service'




const place_db = [{
  "_id": "p101",
  "title": "Tel Aviv",
  "description": "tel aviv ya habibi",
  "imgUrl": "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2021/01/Tel-Aviv-Travel.jpg?fit=2000%2C1381&ssl=1",
  "createdAt": "1619367824710",
  "comments": [],
  "location": {
    "lan": 424,
    "lat": 424
  }
}]
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
      localStorage.setItem(ENTITY, JSON.stringify(place_db))
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

  // private createPlaces(): place[] {
  //   return ['Vue', 'Angular', 'React', 'Redux', 'NGRX', 'Vuex']
  //     .map(txt => ({id: storageService.makeId(), txt}))
  // }
  // get emptyplace(): place {
  //   return {
  //     id: '',
  //     txt: ''
  //   }
  // }
}
