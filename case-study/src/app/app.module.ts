import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home/home.component';
import {HeaderComponent} from './layuot/header/header.component';
import {FooterComponent} from './layuot/footer/footer.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {EmployeeDetailComponent} from './employee/employee-detail/employee-detail.component';
import {CustomerService} from './customer/service/customer.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { ServiceEditComponent } from './service/service-edit/service-edit.component';
import { ServiceDetailComponent } from './service/service-detail/service-detail.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerDetailComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent,
    PageNotFoundComponent,
    CustomerDeleteComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceEditComponent,
    ServiceDetailComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
