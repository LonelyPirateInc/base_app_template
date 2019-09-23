export class InviteUserDto {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    facilityId?: string;

    public constructor(init?: Partial<InviteUserDto>) {
        Object.assign(this, init);
    }
}