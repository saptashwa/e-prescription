import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from '../signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ],
  exports:[SignupComponent]
})
export class SignupModule { }
