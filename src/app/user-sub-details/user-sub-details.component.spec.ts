import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubDetailsComponent } from './user-sub-details.component';

describe('UserSubDetailsComponent', () => {
  let component: UserSubDetailsComponent;
  let fixture: ComponentFixture<UserSubDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
