import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from './../../../../core/services/authentication.service';
import { ConfigurationService } from './../../../../core/services/configuration.service';
import { isNumber } from 'util';
import { RegisterFacilityDto } from '@shared/dtos/register-facility.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public configurationService: ConfigurationService, 
              public authenticationService: AuthenticationService,
              private fb: FormBuilder) { }

  public registerationForm: FormGroup;


  ngOnInit() {
    this.registerationForm = this.fb.group({
      // register facility 
      facility: this.fb.group({
        name: new FormControl(null, Validators.required),
        streetNumber: new FormControl(null, Validators.required),
        streetName: new FormControl(null, Validators.required),
        stateProvince: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        phone: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
      }),
      // register user 
      user: this.fb.group({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        phone: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        stateProvince: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        streetName: new FormControl(null, Validators.required),
        streetNumber: new FormControl(null, Validators.required),
        postalCode: new FormControl(null, Validators.required)
      })
    });
  }


  register() {
    if (this.registerationForm.valid) {
      const registrationDto: RegisterFacilityDto = new RegisterFacilityDto(this.registerationForm.value);
      this.authenticationService.registerFacility(registrationDto).subscribe();
    }
  }

}
