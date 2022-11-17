import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePeopleComponent } from './components/create-people/create-people.component';
import { GetPeopleComponent } from './components/get-people/get-people.component';
import { GetallPeopleComponent } from './components/getall-people/getall-people.component';
import { UpdatePeopleComponent } from './components/update-people/update-people.component';
import { DeletePeopleComponent } from './components/delete-people/delete-people.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreatePeopleComponent,
    GetPeopleComponent,
    GetallPeopleComponent,
    UpdatePeopleComponent,
    DeletePeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
