import { TestBed } from '@angular/core/testing';

import { APIFunHouseService } from './api-fun-house.service';
import { HttpModule } from '@angular/http';

describe('APIFunHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule]
  }));

  it('should be created', () => {
    const service: APIFunHouseService = TestBed.get(APIFunHouseService);
    expect(service).toBeTruthy();
  });
});
