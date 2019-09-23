import { Config } from './../models/config/config.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({providedIn: 'root',})
export class ConfigurationService {

  public config: Config;

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:3000/').pipe(map(response => response)).subscribe(
      (config: Config) => this.config = { BASE_URL: 'http://localhost:3000'},
      error => console.error('Error: ' + error)
    );
   };

  get(key: any) {
    return this.config[key];
  };
  
}
