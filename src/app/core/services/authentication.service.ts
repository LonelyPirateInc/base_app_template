import { LocalStorageItemKeys } from '@shared/enums/localstroage/local-storage-item-keys.enum';
import { LoginUserDto } from '@shared/dtos/login-user.dto';
import { ConfigurationService } from './configuration.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegisterFacilityDto } from '@shared/dtos/register-facility.dto';
import { UserLoggedInResponse } from '@shared/models/login';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<UserLoggedInResponse>;
    public currentUser: Observable<UserLoggedInResponse>;
    private AUTH_URL = '/auth';
    private FACILITY_URL = '/facility';

    constructor(private http: HttpClient,
                public configurationService: ConfigurationService,
                private firestore: AngularFirestore) {
        this.currentUserSubject = new BehaviorSubject<UserLoggedInResponse>(JSON.parse(localStorage.getItem(LocalStorageItemKeys.CURRENT_USER)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserLoggedInResponse {
        return this.currentUserSubject.value;
    }

    login(loginDto: LoginUserDto): Observable<UserLoggedInResponse> {
        return this.http.post<UserLoggedInResponse>(`${this.configurationService.config.BASE_URL}${this.AUTH_URL}/login`, loginDto)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(LocalStorageItemKeys.CURRENT_USER, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }


    registerFacility(payload: RegisterFacilityDto) {
        return this.http.post<any>(`${this.configurationService.config.BASE_URL}${this.FACILITY_URL}/register`, payload)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(LocalStorageItemKeys.CURRENT_USER, JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(LocalStorageItemKeys.CURRENT_USER);
        this.currentUserSubject.next(null);
    }
}
