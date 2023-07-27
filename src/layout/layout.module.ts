import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

@NgModule({
    declarations:[
    MainLayoutComponent,
          HeaderComponent,
          MainLayoutComponent,
          DashboardComponent,
          AnalyticsComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule
    ],
    exports:[
        HeaderComponent,
        AnalyticsComponent
    ]
})
export class LayoutModule {}