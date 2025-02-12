import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import{redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { HomeComponent } from './home/home.component';
import { PatientModule } from './patient/patient.module';
import {PrescriptionModule} from './prescription/prescription.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path:'',
  redirectTo:'/login',
  pathMatch:'full'
  },
  
  {
  path : "login",
  loadChildren : ()=> LoginModule
  },

  {path:'home',
  component:HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  },
{
  path : "patient",
  loadChildren : ()=> PatientModule

},

 {
   path : "prescription",
   loadChildren : ()=> PrescriptionModule
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
