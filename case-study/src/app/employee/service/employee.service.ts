import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {Division} from '../model/division';
import {EducationDegree} from '../model/educationDegree';
import {Positions} from '../model/position';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API_EMPLOYEE ='http://localhost:3000/employee';
  public API_POSITION='http://localhost:3000/position';
  public API_DIVISION='http://localhost:3000/division';
  public API_EDUCATIONDEGRESS= 'http://localhost:3000/educationDegree';

  constructor(private http: HttpClient) { }

  public getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.API_EMPLOYEE);
  }

  public getAllPosition(): Observable<Positions[]>{
    return this.http.get<Positions[]>(this.API_POSITION);
  }

  public getAllDivision(): Observable<Division[]>{
    return this.http.get<Division[]>(this.API_DIVISION);
  }

  public getAllEducation(): Observable<EducationDegree[]>{
    return this.http.get<EducationDegree[]>(this.API_EDUCATIONDEGRESS);
  }

  public save(employee): Observable<Employee>{
    return this.http.post<Employee>(this.API_EMPLOYEE,employee);
  }

  findById(id: number) {
    return this.http.get<Employee>(`${this.API_EMPLOYEE}/${id}`);
  }

  update(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_EMPLOYEE}/${id}`, employee);
  }

  public deleteCustomer(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.API_EMPLOYEE}/${id}`);
  }
}
