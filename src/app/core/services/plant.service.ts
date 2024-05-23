import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPlantsResponseInterface } from '../../shared/types/GetPlantsResponse.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<GetPlantsResponseInterface> {
    const url = environment.BaseUrl;
    return this.http.get<GetPlantsResponseInterface>(url);
  }
}
