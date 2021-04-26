import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { placeState } from 'src/app/store/reducers/place.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private store: Store<State<placeState>>) {
    this.user$ = this.store.select('placeState').pipe(pluck('user'));

   }

  ngOnInit(): void {
  }

}
