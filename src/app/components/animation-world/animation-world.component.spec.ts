import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationWorldComponent } from './animation-world.component';

describe('AnimationWorldComponent', () => {
  let component: AnimationWorldComponent;
  let fixture: ComponentFixture<AnimationWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
