import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-getall-people',
  templateUrl: './getall-people.component.html',
  styleUrls: ['./getall-people.component.scss'],
})
export class GetallPeopleComponent implements OnInit {
  people?: People[];
  currentPeople: People = {
    id: '',
    name: '',
    lastName: '',
    nacionality: '',
    cpf: '',
    cep: '',
    state: '',
    city: '',
    public_place: '',
    email: '',
    telephone: '',
    currentPeople: {},
    people: {},
    data: {},
  };
  currentIndex = -1;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.retrievePeople();
  }

  retrievePeople(): void {
    this.peopleService.getAll().subscribe({
      next: (data) => {
        this.people = data.data.people;
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrievePeople();
    this.currentPeople;
    this.currentIndex = -1;
  }

  setActivePeople(people: People, index: number): void {
    this.currentPeople = people;
    this.currentIndex = index;
  }
}
