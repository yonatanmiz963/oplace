import { Component, Input, OnInit } from '@angular/core';
import { place } from 'src/app/models/place';
import { placeListComponent } from '../place-list/place-list.component';

@Component({
  selector: 'place-preview',
  templateUrl: './place-preview.component.html',
  styleUrls: ['./place-preview.component.scss'],
})
export class placePreviewComponent implements OnInit {
  @Input() place: place | null = null;
  isMap:boolean = false
  constructor(private placeList: placeListComponent) {
    
  }

  ngOnInit(): void {}
}
