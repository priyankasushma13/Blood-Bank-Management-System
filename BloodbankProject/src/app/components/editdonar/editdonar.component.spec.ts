import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdonarComponent } from './editdonar.component';

describe('EditdonarComponent', () => {
  let component: EditdonarComponent;
  let fixture: ComponentFixture<EditdonarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdonarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
