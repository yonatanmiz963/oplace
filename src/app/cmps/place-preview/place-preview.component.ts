import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place';
import { placeListComponent } from '../place-list/place-list.component';

@Component({
  selector: 'place-preview',
  templateUrl: './place-preview.component.html',
  styleUrls: ['./place-preview.component.scss'],
})
export class placePreviewComponent implements OnInit {
  @Input() place: Place | null = null;
  constructor(private placeList: placeListComponent) {
    
  }

  ngOnInit(): void {}
}
