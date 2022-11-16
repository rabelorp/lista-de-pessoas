import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPeopleComponent } from './get-people.component';

describe('GetPeopleComponent', () => {
  let component: GetPeopleComponent;
  let fixture: ComponentFixture<GetPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
