import { NgModule } from "@angular/core";
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

@NgModule({
    imports: [
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
        ReactiveFormsModule
    ],
    exports:[
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatCheckboxModule,
        FlexLayoutModule,
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
        ReactiveFormsModule
    ]
})
export class SharedModule{}