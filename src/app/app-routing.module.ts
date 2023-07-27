import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/auth/not-found/not-found.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
    import("./../auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "session/404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "session/404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
