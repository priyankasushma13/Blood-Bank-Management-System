import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddavailabilityComponent } from './addavailability.component';

describe('AddavailabilityComponent', () => {
  let component: AddavailabilityComponent;
  let fixture: ComponentFixture<AddavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddavailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
