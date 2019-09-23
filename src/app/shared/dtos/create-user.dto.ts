import { InviteUserDto } from './../../modules/register/core/dtos/invite-user.dto';

export class CreateUserDto extends InviteUserDto  {
    public password: string;
    public phone: number;
    public country: string;
    public stateProvince: string;
    public city: string;
    public streetName: string;
    public streetNumber: string;
    public postalCode: string;

    public constructor(init: CreateUserDto) {
        super();
        Object.assign(this, init);
    }
  }