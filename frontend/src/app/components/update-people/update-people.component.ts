import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
@Component({
  selector: 'app-update-people',
  templateUrl: './update-people.component.html',
  styleUrls: ['./update-people.component.scss'],
})
export class UpdatePeopleComponent implements OnInit {
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
  currentPeople: any;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPeople(this.route.snapshot.params['id']);
  }

  getPeople(id: string): void {
    this.peopleService.get(id).subscribe({
      next: (data) => {
        this.currentPeople = data.data.people;
        console.log(data.data.people);
      },
      error: (e) => console.error(e),
    });
  }

  updatePeople(id: string): void {
    const data = {
      name: this.currentPeople.name,
      lastName: this.currentPeople.lastName,
      nacionality: this.currentPeople.nacionality,
      cpf: this.currentPeople.cpf,
      cep: this.currentPeople.cep,
      state: this.currentPeople.state,
      city: this.currentPeople.city,
      public_place: this.currentPeople.public_place,
      email: this.currentPeople.email,
      telephone: this.currentPeople.telephone,
    };

    this.peopleService.update(id, data).subscribe({
      next: (res) => {
        console.log('data', data);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }
}
