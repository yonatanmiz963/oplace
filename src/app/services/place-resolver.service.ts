import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Place } from '../models/place';
import { placeService } from './place.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceResolverService implements Resolve<Observable<any>> {

  constructor(private placeService: placeService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    // console.log('id:', id)
    // this.msgService.setLoading(true)
    // console.log(' this.placeService.getById(id):',  this.placeService.getById(id))
    return this.placeService.getById(id)
    // .pipe(
    // catchError(err => this.msgService.sendAlert(err))
    // )
  }
}
