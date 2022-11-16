import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallPeopleComponent } from './getall-people.component';

describe('GetallPeopleComponent', () => {
  let component: GetallPeopleComponent;
  let fixture: ComponentFixture<GetallPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetallPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
