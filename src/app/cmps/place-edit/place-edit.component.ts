import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { place } from '../../models/place';
import { savePlace } from '../../store/actions/place.actions';
import { State } from '../../store/store';

@Component({
  selector: 'place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class placeEditComponent implements OnInit {
  place$: Observable<place | null>;
  place = { id: '', txt: '' }
  @Output() saved = new EventEmitter();
  sub: Subscription | null = null;

  constructor(private store: Store<State>) {
    this.place$ = this.store.select('placeState').pipe(pluck('place'));
  }
  get placeEditState() {
    return (this.place.id) ? 'Update' : 'Add'
  }

  ngOnInit(): void {
    this.sub = this.place$.subscribe(place => {
      console.log('Got place to Edit', place);
      if (place) this.place = JSON.parse(JSON.stringify(place))
      // else this.saved.emit() // This fails due to Angular behavior (problem with the intial emit)
    })

  }
  saveplace() {
    this.store.dispatch(new savePlace(this.place));
    console.log('Saving: ', this.place);
    // TODO: Figure a way to know that saving was done before closing here
    this.saved.emit();
  }
  ngOnDestroy() {
    this.sub && this.sub.unsubscribe()
  }

}
