import { BasePaths } from './../enums/base-paths/base-paths.enum';
import { Injectable } from '@angular/core';
import { FirestoreService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFirestoreService extends FirestoreService<any> {

  protected basePath: BasePaths = BasePaths.AUTH_URL;
}
