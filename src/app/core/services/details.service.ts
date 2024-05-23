import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PlantDetailsInterface } from '../../shared/types/plantDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getPlantDetails(id: number): Observable<PlantDetailsInterface> {
    const fullUrl = `${environment.BaseUrl}/${id}`;
    return this.http.get<PlantDetailsInterface>(fullUrl);
  }
}
