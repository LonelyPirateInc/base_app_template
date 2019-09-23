export class LoginUserDto {
    public email: string;
    public password: string;

    public constructor(init: LoginUserDto) {
        Object.assign(this, init);
    }
  }