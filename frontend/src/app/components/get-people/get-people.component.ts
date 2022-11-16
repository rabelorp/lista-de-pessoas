import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-people',
  templateUrl: './get-people.component.html',
  styleUrls: ['./get-people.component.scss'],
})
export class GetPeopleComponent implements OnInit {
  @Input() currentPeople: People = {
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

  message = '';

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getPeople(this.route.snapshot.params['id']);
  }
  getPeople(id: string): void {
    this.peopleService.get(id).subscribe({
      next: (data) => {
        this.currentPeople = data.data.people;
      },
      error: (e) => console.error(e),
    });
  }
}
