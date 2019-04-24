import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HomeComponentComponent } from './frontpage/home-component/home-component.component';
import { SigninComponentComponent } from './frontpage/signin-component/signin-component.component';
import { SignupComponentComponent } from './frontpage/signup-component/signup-component.component';
import { NavcomponentComponent } from './frontpage/layout/navcomponent/navcomponent.component';
import { FootercomponentComponent } from './frontpage/layout/footercomponent/footercomponent.component';
import { HeadercomponentComponent } from './frontpage/layout/headercomponent/headercomponent.component';
import { AboutComponentComponent } from './frontpage/about-component/about-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'signin', component: SigninComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'about', component: AboutComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  FrontpageComponent,
  HomeComponentComponent,
  HeadercomponentComponent,
  NavcomponentComponent,
  FootercomponentComponent,
  SigninComponentComponent,
  SignupComponentComponent,
  AboutComponentComponent
]