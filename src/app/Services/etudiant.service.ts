import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { etudiant } from '../request/etudiant';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiUrl = '/api/etudiants';

  constructor(private http: HttpClient) {}

  // Method to get a student by ID
  getEtudiantById(id: number): Observable<any> {
    return this.http.get<any>('/api/etudiants/'+id);
  }
 // getEtudiantById(id: number): Observable<any> {
   // return this.http.get<any>(`${this.apiUrl}/${id}`);
  //}
 
  getNotesByEtudiantId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/etudiants/${id}/notes`);
  }
   

  // Method to update student information
  updateEtudiant(id: number, data: etudiant): Observable<etudiant> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // Method to download the student's profile picture
  downloadProfilePicture(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}/profile-picture`, { responseType: 'blob' as 'json' });
  }
}
