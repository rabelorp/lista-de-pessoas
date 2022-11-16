import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePeopleComponent } from './components/create-people/create-people.component';
import { DeletePeopleComponent } from './components/delete-people/delete-people.component';
import { GetPeopleComponent } from './components/get-people/get-people.component';
import { GetallPeopleComponent } from './components/getall-people/getall-people.component';
import { UpdatePeopleComponent } from './components/update-people/update-people.component';

const routes: Routes = [
  { path: '', redirectTo: 'people/getall', pathMatch: 'full' },
  { path: 'people/create', component: CreatePeopleComponent },
  { path: 'people/getall', component: GetallPeopleComponent },
  { path: 'people/get/:id', component: GetPeopleComponent },
  { path: 'people/update/:id', component: UpdatePeopleComponent },
  { path: 'people/delete/:id', component: DeletePeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
