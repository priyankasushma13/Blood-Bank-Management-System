import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddonarComponent } from './adddonar.component';

describe('AdddonarComponent', () => {
  let component: AdddonarComponent;
  let fixture: ComponentFixture<AdddonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddonarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
