import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DetailsService } from './details.service';

describe('DetailsService', () => {
  let service: DetailsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DetailsService],
    });
    service = TestBed.inject(DetailsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPlantDetails', () => {
    it('should calls correct API endpoint', () => {
      service.getPlantDetails(1).subscribe(response => {
        expect(response).toBeTruthy();
      });

      const req = httpTestingController.expectOne(
        req =>
          req.method === 'GET' &&
          req.url ===
            'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev/1'
      );

      req.flush({});
    });
  });

  //TODO: Test response type
});
