import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: "",
        component:MainLayoutComponent,
        children:[
            {
                path:"dashboard",
                component: DashboardComponent
        }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule {}