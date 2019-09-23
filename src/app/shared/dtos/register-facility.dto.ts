import { CreateFacilityDto } from './create-facility.dto';
import { CreateUserDto } from './create-user.dto';

export class RegisterFacilityDto {
    public facility: CreateFacilityDto;
    public user: CreateUserDto;

    public constructor(init: RegisterFacilityDto) {
        Object.assign(this, init);
    }
  }
  