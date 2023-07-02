import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButListComponent } from './but-list.component';

describe('ButListComponent', () => {
  let component: ButListComponent;
  let fixture: ComponentFixture<ButListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
