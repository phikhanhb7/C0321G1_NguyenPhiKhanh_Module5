import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';
import {Class} from '../model/class';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_STUDENT = 'http://localhost:3000/studentList';
  private API_CLASS = 'http://localhost:3000/classList';


  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_STUDENT);
  }

  getAllClass(): Observable<Class[]> {
    return this.http.get<Class[]>(this.API_CLASS);
  }

  public save(student): Observable<Student> {
    return this.http.post<Student>(this.API_STUDENT, student);
  }

  findById(id: number) {
    return this.http.get<Student>(this.API_STUDENT + '/' + id);
  }

  update(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(this.API_STUDENT + '/' + id, student);
  }

  public delete(id: number): Observable<Student> {
    return this.http.delete<Student>(this.API_STUDENT + '/' + id);
  }
}
