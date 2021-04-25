import { ComponentFixture, TestBed } from '@angular/core/testing';

import { placeListComponent } from './place-list.component';

describe('placeListComponent', () => {
  let component: placeListComponent;
  let fixture: ComponentFixture<placeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ placeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(placeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
