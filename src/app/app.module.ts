import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    EmployeeGridComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
