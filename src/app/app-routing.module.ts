import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ScienceComponent } from './science/science.component';
import { UserSubDetailsComponent } from './user-sub-details/user-sub-details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'home', component: HomeComponent, data: {
      title: 'test home'
    },
  },
  { path: 'home/:xyz', component: HomeComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'science/:id', component: UserSubDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
