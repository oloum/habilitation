import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { ListActifComponent } from './list-actif/list-actif.component';
import { ListEntiteComponent } from './list-entite/list-entite.component';
import { ListPosteComponent } from './list-poste/list-poste.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { ListHabilitationComponent } from './list-habilitation/list-habilitation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login', component: HomeComponent, data: { title: 'First Component' },
    children: [
      { path: '', component: LoginComponent },
      { path: 'forgetpassword', component: ForgetPasswordComponent },
      { path: 'resetpassword', component: ResetPasswordComponent },
    ]
  },
  {
    path: 'main', component: LayoutComponent,
    children: [
      {path: '', component: LayoutComponent},
      {path: 'dash', component: DashboardComponent},
      {path: 'employe', component: ListEmployeComponent},
      {path: 'actif', component: ListActifComponent},
      {path: 'entite', component: ListEntiteComponent},
      {path: 'poste', component: ListPosteComponent},
      {path: 'role', component: ListRoleComponent},
      {path: 'moncompte', component: MonCompteComponent},
      {path: 'habilitation', component: ListHabilitationComponent},
      {path: 'profil', component: ListProfilComponent},
      {path: 'editpassword', component: EditPasswordComponent}
    ]
  },
  {path : '', redirectTo : 'login',
   pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
