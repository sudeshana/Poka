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

  getPlants(url: string | undefined): Observable<GetPlantsResponseInterface> {
    const fullUrl = url ? `${environment.BaseUrl}/${url}` : environment.BaseUrl;
    //const fullUrl = environment.BaseUrl;
    return this.http.get<GetPlantsResponseInterface>(fullUrl);
  }
}
