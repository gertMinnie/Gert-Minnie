import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { EmployeeGridComponent } from './employee-grid/employee-grid.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }

const routes: Routes = [
  {path: 'employee-grid', component: EmployeeGridComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'employee-profile', component: EmployeeProfileComponent}
]

