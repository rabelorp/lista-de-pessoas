import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-people',
  templateUrl: './delete-people.component.html',
  styleUrls: ['./delete-people.component.scss'],
})
export class DeletePeopleComponent implements OnInit {
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
    this.deletePeople(this.route.snapshot.params['id']);
  }

  deletePeople(id: string): void {
    this.peopleService.delete(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e),
    });
  }
}
