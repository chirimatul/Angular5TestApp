import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchildComponent } from './userchild.component';

describe('UserchildComponent', () => {
  let component: UserchildComponent;
  let fixture: ComponentFixture<UserchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
