import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly baseUrl = 'https://localhost:7093/api/Student';
  private readonly CONTENT_TYPE = 'application/json';
  private readonly headers: HttpHeaders

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': this.CONTENT_TYPE
    })
  }

  getAllStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.baseUrl}/students`, {headers: this.headers});
  }

  searchStudent(searchTerm: string): Observable<IStudent[]> {

    let params = new HttpParams().set('search', searchTerm);
    // if (searchTerm) {
    //   params = params.set('search', searchTerm);
    // }
    return this.http.get<IStudent[]>(`${this.baseUrl}/search`, {params, headers: this.headers});
  }

  getStudentById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.baseUrl}/${id}`, {headers: this.headers});
  }
}
 