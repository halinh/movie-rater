import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { AuthComponent } from '../auth/auth.component';
import { ApiService } from '../api.service'
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes:Routes=[
  {path:'movies',component:MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,  
    RouterModule.forChild(routes),
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ],
  providers:[
    ApiService
  ]

})
export class MainModule { }
