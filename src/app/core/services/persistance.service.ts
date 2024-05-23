import { Injectable } from '@angular/core';
import { GetPlantsResponseInterface } from '../../shared/types/GetPlantsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to local storage', e);
    }
  }

  get(key: string): GetPlantsResponseInterface | null {
    try {
      const localStorageItem = localStorage.getItem(key);
      return localStorageItem ? JSON.parse(localStorageItem) : null;
    } catch (e) {
      console.error('Error getting from local storage', e);
      return null;
    }
  }

  delete(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error deleting local storage', e);
    }
  }
}
