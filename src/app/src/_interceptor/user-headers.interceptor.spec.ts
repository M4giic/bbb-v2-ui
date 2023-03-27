import { TestBed } from '@angular/core/testing';

import { UserHeadersInterceptor } from './user-headers.interceptor';

describe('UserHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UserHeadersInterceptor = TestBed.inject(UserHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
