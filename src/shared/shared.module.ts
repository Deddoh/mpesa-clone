import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';  
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FlexLayoutModule,
        MatDialogModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        LoadingBarModule,
        RouterModule,
        NzTableModule,
        NzButtonModule,
        NzCardModule
    ],
    exports:[
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatIconModule,
        LoadingBarModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NzTableModule,
        NzCardModule,
        NzButtonModule


    ]
})
export class SharedModule{}