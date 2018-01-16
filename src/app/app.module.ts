import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    EmployeeGridComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
