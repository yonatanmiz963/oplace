import { Injectable, isDevMode } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { Place } from '../models/place';
import { loadingPlaces } from '../store/actions/place.actions';
import { placeState } from '../store/reducers/place.reducer';
import { HttpClient } from '@angular/common/http';

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
  constructor(private store: Store<placeState>,private http: HttpClient) {
    // If empty - load test data to storage
    const places = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!places || places.length === 0) {
      console.log('BUU');
      localStorage.setItem(ENTITY, JSON.stringify(place_db))
    }
  }

  
  BASE_URL = !isDevMode()
  ? '/api/'
  : '//localhost:3030/api/'



  query(filterBy = '') {
    // this.store.dispatch(new loadingPlaces());
    // console.log('placeService: Return places ===> effect');
    // return from(storageService.query(ENTITY) as Promise<Place[]>)
    // return new Observable((observer) => observer.next(places));
    // console.log('this.BASE_URL:', this.BASE_URL)
    return this.http.get<{ answer: Object }>(`${this.BASE_URL}place`)
    
  }
  getById(placeId: string) {
    // console.log('placeService: Return place ===> effect');
    // return from(storageService.get(ENTITY, placeId) as Promise<Place>)
    return this.http.get<{ answer: Object }>(`${this.BASE_URL}place/${placeId}`)
  }
  remove(placeId: string) {
    // console.log('placeService: Removing places ===> effect');
    // return from(storageService.remove(ENTITY, placeId))
    return this.http.delete<{ answer: Object }>(`${this.BASE_URL}place/${placeId}`)
  }
  
  save(place: Place) {
    return (place._id) 
    ? 
    this.http.put<{ answer: Object }>(`${this.BASE_URL}place/${place._id}`, {...place})
    : 
    this.http.post<{ answer: Object }>(`${this.BASE_URL}place`, {...place})

    // const prmSavedplace = storageService[method](ENTITY, place)
    // return this.http[method]<{ answer: Object }>(`${this.BASE_URL}place/${place}`, place)
    // console.log('placeService: Saving place ===> effect');
    // return from(prmSavedplace) as Observable<Place>
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
