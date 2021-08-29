import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../employee/model/employee';
import {Positions} from '../../employee/model/position';
import {Division} from '../../employee/model/division';
import {EducationDegree} from '../../employee/model/educationDegree';
import {Service} from '../model/service';
import {ServiceType} from '../model/serviceType';
import {RentType} from '../model/rentType';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private API_SERVICE = 'http://localhost:3000/service';
  private API_SERVICE_TYPE='http://localhost:3000/serviceType';
  private API_RENT_TYPE='http://localhost:3000/rentType';

  constructor(private http: HttpClient) { }
  public getAllService(): Observable<Service[]>{
    return this.http.get<Service[]>(this.API_SERVICE);
  }

  public getAllServiceType(): Observable<ServiceType[]>{
    return this.http.get<ServiceType[]>(this.API_SERVICE_TYPE);
  }

  public getAllRentType(): Observable<RentType[]>{
    return this.http.get<RentType[]>(this.API_RENT_TYPE);
  }


  public save(service): Observable<Service>{
    return this.http.post<Service>(this.API_SERVICE,service);
  }

  findById(id: number) {
    return this.http.get<Employee>(this.API_SERVICE +'/'+ id);
  }

  update(id: number, service : Service): Observable<Service> {
    return this.http.put<Service>(this.API_SERVICE+ '/' + id , service);
  }

  public deleteService(id: number): Observable<Service> {
    return this.http.delete<Service>(this.API_SERVICE +'/'+ id);
  }
}
