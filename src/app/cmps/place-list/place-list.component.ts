import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class placeListComponent implements OnInit {
  @Input() places: Place[] | null = [];
  @Output() removed = new EventEmitter<string>()
  @Output() edited = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void { }
  removePlace(placeId: string | undefined) {
    this.removed.emit(placeId)
  }
  // editplace(placeId: string) {
  //   console.log('placeList Emitting edited to Parent');
  //   this.edited.emit(placeId)
  // }
}
