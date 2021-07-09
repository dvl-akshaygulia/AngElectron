import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizeCompComponent } from './minimize-comp.component';

describe('MinimizeCompComponent', () => {
  let component: MinimizeCompComponent;
  let fixture: ComponentFixture<MinimizeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimizeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimizeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
