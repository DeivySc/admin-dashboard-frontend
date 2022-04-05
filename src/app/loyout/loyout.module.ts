import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoyoutRoutingModule} from "./loyout-routing.module";
import { ListBusinessComponent } from './views/list-business/list-business.component';
import {LoyoutComponent} from "./loyout.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatIconModule} from "@angular/material/icon";
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeadersComponent } from './components/headers/headers.component';


import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


import { AddBusinessModalComponent } from './views/list-business/components/add-business-modal/add-business-modal.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    LoyoutComponent,
    ListBusinessComponent,
    SidebarComponent,
    DashboardComponent,
    HeadersComponent,
    AddBusinessModalComponent
  ],
  imports: [
    CommonModule,
    LoyoutRoutingModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ]
})
export class LoyoutModule { }
