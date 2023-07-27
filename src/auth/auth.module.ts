import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
    LoginComponent,
    NotFoundComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule {}