import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsStudyComponent } from './obs-study.component';

describe('ObsStudyComponent', () => {
  let component: ObsStudyComponent;
  let fixture: ComponentFixture<ObsStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
