import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChildBComponent } from './child-child-b.component';

describe('ChildChildBComponent', () => {
  let component: ChildChildBComponent;
  let fixture: ComponentFixture<ChildChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
