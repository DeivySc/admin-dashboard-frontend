import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoyoutComponent} from "./loyout.component";
import {ListBusinessComponent} from "./views/list-business/list-business.component";
import {DashboardComponent} from "./views/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: LoyoutComponent,
    children: [
      {path: 'empresas', component: ListBusinessComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoyoutRoutingModule { }
