import { InviteUserDto } from './invite-user.dto';
import { UserRoleTypeEnum } from '@shared/enums';

export class RegisterUserDto {
    public inviteUser: InviteUserDto;
    public roleType: UserRoleTypeEnum;
    
    public constructor(init?: Partial<RegisterUserDto>) {
        Object.assign(this, init);
    }

}