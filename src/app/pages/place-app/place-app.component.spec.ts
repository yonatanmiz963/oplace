import { ComponentFixture, TestBed } from '@angular/core/testing';

import { placeAppComponent } from './place-app.component';

describe('placeAppComponent', () => {
  let component: placeAppComponent;
  let fixture: ComponentFixture<placeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ placeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(placeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
