import { Injectable, isDevMode } from '@angular/core';
import { Store } from '@ngrx/store';
import { Place } from '../models/place';
import { placeState } from '../store/reducers/place.reducer';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class placeService {
  constructor(private store: Store<placeState>,private http: HttpClient) {}
  
  BASE_URL = !isDevMode() ? '/api/' : '//localhost:3030/api/'

  query(filterBy = '') {
    return this.http.get<{ answer: Object }>(`${this.BASE_URL}place`)
    
  }
  getById(placeId: string) {
    return this.http.get<{ answer: Object }>(`${this.BASE_URL}place/${placeId}`)
  }
  remove(placeId: string) {
    return this.http.delete<{ answer: Object }>(`${this.BASE_URL}place/${placeId}`)
  }
  
  save(place: Place) {
    return (place._id) ? 
    this.http.put<{ answer: Object }>(`${this.BASE_URL}place/${place._id}`, {...place})
    : 
    this.http.post<{ answer: Object }>(`${this.BASE_URL}place`, {...place})
  }
}
