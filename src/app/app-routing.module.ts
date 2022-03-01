import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { LoginComponent } from './Component/login/login.component';
import { RestaurantDashComponent } from './Component/restaurant-dash/restaurant-dash.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path:'restaurant',component:RestaurantDashComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
