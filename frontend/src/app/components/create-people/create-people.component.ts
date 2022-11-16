import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.scss'],
})
export class CreatePeopleComponent implements OnInit {
  people: People = {
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
  submitted = false;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {}

  createPeople(): void {
    const data = {
      name: this.people.name,
      lastName: this.people.lastName,
      nacionality: this.people.nacionality,
      cpf: this.people.cpf,
      cep: this.people.cep,
      state: this.people.state,
      city: this.people.city,
      public_place: this.people.public_place,
      email: this.people.email,
      telephone: this.people.telephone,
    };

    this.peopleService.create(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
}
