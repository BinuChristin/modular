import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.bindListEmployees();
  }

}
