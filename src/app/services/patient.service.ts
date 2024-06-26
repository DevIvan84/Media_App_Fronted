import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url: string = `${environment.HOST}/patients`;


  constructor( private http: HttpClient ) { }

  findAll() {
    return this.http.get<Patient[]>(this.url);
  }

  findById(id: number) {
    return this.http.get<Patient>(`${this.url}/${id}`);
  }

  save(patient: Patient) {
    return this.http.post(this.url, patient);
  }

  update(id: number, patient: Patient) {
    return this.http.put(`${this.url}/${id}`, patient);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }


}
