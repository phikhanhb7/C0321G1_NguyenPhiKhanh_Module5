import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }