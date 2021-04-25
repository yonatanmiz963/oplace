import { ComponentFixture, TestBed } from '@angular/core/testing';

import { placePreviewComponent } from './place-preview.component';

describe('placePreviewComponent', () => {
  let component: placePreviewComponent;
  let fixture: ComponentFixture<placePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ placePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(placePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
