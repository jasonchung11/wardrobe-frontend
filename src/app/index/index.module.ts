import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class IndexModule { }
