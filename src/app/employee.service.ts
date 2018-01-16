
import { EMPLOYEES } from './../assets/Employees';
import { Employee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';


@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[]{
    return EMPLOYEES
  }

}
