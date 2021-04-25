import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Place } from '../../models/place';
import { savePlace } from '../../store/actions/place.actions';
import { State } from '../../store/store';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.scss']
})
export class PlaceEditComponent implements OnInit {
  // place$: Observable<Place | null>;
  // @Output() saved = new EventEmitter();
  // sub: Subscription | null = null;
  place: Place
  // form: FormGroup

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<State>) {
    // this.place$ = this.store.select('placeState').pipe(pluck('place'));

    this.place = {
      title: '',
      description: '',
      imgUrl: '',
      createdAt: null,
      comments: [],
      location: {}
    }
  }

  get placeEditState() {
    return (this.place._id) ? 'Update' : 'Add'
  }

  ngOnInit(): void {
    // this.sub = this.place$.subscribe(place => {
    //   console.log('Got place to Edit', place);
    //   if (place) this.place = JSON.parse(JSON.stringify(place))
    //   // else this.saved.emit() // This fails due to Angular behavior (problem with the intial emit)
    // })

    this.route.data.subscribe(data => {
      if (Object.keys(data).length) {
        this.place = data.place
      }
    })
  }

  onSavePlace() {
    if (!this.place.createdAt) this.place.createdAt = Date.now()
    this.store.dispatch(new savePlace(this.place));
    console.log('Saving: ', this.place);
    // TODO: Figure a way to know that saving was done before closing here
    // this.saved.emit();
  }

  ngOnDestroy() {
    // this.sub && this.sub.unsubscribe()
  }
}
