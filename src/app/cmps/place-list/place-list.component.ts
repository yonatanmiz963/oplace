import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { place } from 'src/app/models/place';

@Component({
  selector: 'place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss'],
})
export class placeListComponent implements OnInit {
  @Input() places: place[] | null = [];
  @Output() removed = new EventEmitter<string>()
  @Output() edited = new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {}
  removeplace(placeId: string) {
    console.log('placeList Emitting removed to Parent');
    this.removed.emit(placeId)
  }
  editplace(placeId: string) {
    console.log('placeList Emitting edited to Parent');
    this.edited.emit(placeId)
  }
}
