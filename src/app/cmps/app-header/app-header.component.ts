import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/store';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(private store: Store<State>) {
    this.user$ = this.store.select('placeState').pipe(pluck('user'));

   }

  ngOnInit(): void {
  }

}
