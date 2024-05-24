import { TestBed } from '@angular/core/testing';
import { PlantService } from './plant.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PlantService', () => {
  let service: PlantService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService],
    });
    service = TestBed.inject(PlantService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPlants', () => {
    it('should calls correct API endpoint', () => {
      service.getPlants(undefined).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpTestingController.expectOne(
        req =>
          req.method === 'GET' &&
          req.url ===
            'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev'
      );

      req.flush({});
    });
  });

  //TODO: Test response type
});
