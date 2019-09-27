import { TestBed } from '@angular/core/testing';

import { Authentication.FirestoreService } from './authentication.firestore.service';

describe('Authentication.FirestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Authentication.FirestoreService = TestBed.get(Authentication.FirestoreService);
    expect(service).toBeTruthy();
  });
});
