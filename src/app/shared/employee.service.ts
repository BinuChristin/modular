import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  formData: Employee = new Employee();
  employees: Employee[] = [];

  constructor(private httpClient:HttpClient) { }

    //for listing Employees
    bindListEmployees(): void {
      this.httpClient.get<Employee[]>(environment.apiUrl + "/api/employees")
        .subscribe(response => this.employees = response);
    }



}
