import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { ListEntiteComponent } from './list-entite/list-entite.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListActifComponent } from './list-actif/list-actif.component';
import { ListHabilitationComponent } from './list-habilitation/list-habilitation.component';
import { ListPosteComponent } from './list-poste/list-poste.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      LayoutComponent,
      MyNavComponent,
      HomeComponent,
      ForgetPasswordComponent,
      ResetPasswordComponent,
      MonCompteComponent,
      EditPasswordComponent,
      ListEntiteComponent,
      ListEmployeComponent,
      ListProfilComponent,
      ListRoleComponent,
      ListActifComponent,
      ListHabilitationComponent,
      ListPosteComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
