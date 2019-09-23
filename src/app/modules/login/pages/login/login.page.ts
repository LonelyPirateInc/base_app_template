import { LoginUserDto } from './../../../../shared/dtos/login-user.dto';
import { AuthenticationService } from './../../../../core/services/authentication.service';
import { ConfigurationService } from './../../../../core/services/configuration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public configurationService: ConfigurationService, 
              public authenticationService: AuthenticationService,
              private fb: FormBuilder) { }

  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    if (this.loginForm.valid) {
      const loginDto = new LoginUserDto(this.loginForm.value);
      this.authenticationService.login(loginDto)
      .subscribe();
    }
  }

}
