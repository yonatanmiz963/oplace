import { ComponentFixture, TestBed } from '@angular/core/testing';

import { placeEditComponent } from './place-edit.component';

describe('placeEditComponent', () => {
  let component: placeEditComponent;
  let fixture: ComponentFixture<placeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ placeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(placeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
