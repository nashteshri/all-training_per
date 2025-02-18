import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { managerGuard } from './manager.guard';

describe('managerGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => managerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
