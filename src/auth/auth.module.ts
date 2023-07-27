import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
    declarations:[
    LoginComponent,
    RegisterComponent,
    NotFoundComponent
  ],
    imports: [
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule {}