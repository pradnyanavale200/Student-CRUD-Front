import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentApi = `${environment.api}/student`;

  constructor(
    private http: HttpClient
  ) { }

  getStudent() {
    return this.http.get(`${this.studentApi}/studentDisplay`);
  }

  studentDelete(id) {
    return this.http.delete(`${this.studentApi}/studentDelete/${id}`);
  }

  studentRegister(data) {
    return this.http.post(`${this.studentApi}/studentRegistration`, data);
  }

  studentUpdate(data) {
    return this.http.post(`${this.studentApi}/studentUpdate`, data);
  }

  getStudentData(data) {
    return this.http.post(`${this.studentApi}/studentData`, data);
  }
}
