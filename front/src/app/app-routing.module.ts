import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RulesComponent } from './pages/rules/rules.component';
import { AuthGuard } from './guards/link.guard';
import { CardsComponent } from './pages/cards/cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'rules', component: RulesComponent },
  { path: 'card', component: CardsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
