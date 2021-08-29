import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {ServiceListComponent} from './service/service-list/service-list.component';
import {ServiceCreateComponent} from './service/service-create/service-create.component';



const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'service-list', component: ServiceListComponent},
  {path: 'service-create', component: ServiceCreateComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
