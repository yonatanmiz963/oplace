import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Item } from '../../models/item';
import { SaveItem } from '../../store/actions/item.actions';
import { State } from '../../store/store';

@Component({
  selector: 'item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  item$: Observable<Item | null>;
  item = { id: '', txt: '' }
  @Output() saved = new EventEmitter();
  sub: Subscription | null = null;

  constructor(private store: Store<State>) {
    this.item$ = this.store.select('itemState').pipe(pluck('item'));
  }
  get itemEditState() {
    return (this.item.id)? 'Update' : 'Add'
  }

  ngOnInit(): void {
    this.sub = this.item$.subscribe(item => {
      console.log('Got Item to Edit', item);
      if (item) this.item = JSON.parse(JSON.stringify(item))
      // else this.saved.emit() // This fails due to Angular behavior (problem with the intial emit)
    })

  }
  saveItem() {
    this.store.dispatch(new SaveItem(this.item));
    console.log('Saving: ', this.item);
    // TODO: Figure a way to know that saving was done before closing here
    this.saved.emit();
  }
  ngOnDestroy() {
    this.sub && this.sub.unsubscribe()
  }

}
