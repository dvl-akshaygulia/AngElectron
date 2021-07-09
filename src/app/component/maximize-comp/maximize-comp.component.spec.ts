import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximizeCompComponent } from './maximize-comp.component';

describe('MaximizeCompComponent', () => {
  let component: MaximizeCompComponent;
  let fixture: ComponentFixture<MaximizeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximizeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximizeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
