import { TestBed } from '@angular/core/testing';

import { PersistanceService } from './persistance.service';

describe('PersistanceService', () => {
  let persistanceService: PersistanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistanceService],
    });
    persistanceService = TestBed.inject(PersistanceService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('creates the service', () => {
    expect(persistanceService).toBeTruthy();
  });

  describe('set', () => {
    it('Should save in localStorage', () => {
      jest.spyOn(Storage.prototype, 'setItem');
      persistanceService.set('KEY', {});
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });
  describe('get', () => {
    it('Should get from localStorage', () => {
      jest.spyOn(Storage.prototype, 'getItem');
      persistanceService.get('KEY');
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
  describe('delete', () => {
    it('Should delete from localStorage', () => {
      jest.spyOn(Storage.prototype, 'removeItem');
      persistanceService.delete('KEY');
      expect(localStorage.removeItem).toHaveBeenCalled();
    });
  });
});
