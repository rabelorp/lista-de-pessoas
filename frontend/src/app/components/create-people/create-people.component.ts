import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.scss'],
})
export class CreatePeopleComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    nacionality: new FormControl(''),
    cpf: new FormControl(''),
    cep: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    public_place: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
  });
  submitted = false;
  status = '';
  message = '';
  show = false;

  constructor(
    private peopleService: PeopleService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      nacionality: ['', [Validators.required, Validators.minLength(5)]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
        ],
      ],
      cep: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/^[0-9]{5}-[0-9]{3}$/),
        ],
      ],
      state: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(5)]],
      public_place: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
        ],
      ],
      telephone: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  createPeople(): void {
    const data = {
      name: this.form.get('name'),
      lastName: this.form.get('lastName'),
      nacionality: this.form.get('nacionality'),
      cpf: this.form.get('cpf'),
      cep: this.form.get('cep'),
      state: this.form.get('state'),
      city: this.form.get('city'),
      public_place: this.form.get('public_place'),
      email: this.form.get('email'),
      telephone: this.form.get('telephone'),
    };
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.peopleService.create(this.form.value).subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.show = true;
          this.status = res.status;
          this.message = 'Pessoa salva com sucesso!';
        }
      },
      error: (e) => {
        this.show = true;
        this.status = e.error.status;
        this.message = 'Ocorreu algum erro ao salvar os dados!';
        console.error(e);
      },
    });
  }
}
