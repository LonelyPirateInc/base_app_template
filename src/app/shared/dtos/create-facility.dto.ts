export class CreateFacilityDto {
    public name: string;
    public streetNumber: number;
    public streetName: string;
    public stateProvince: string;
    public country: string;
    public phone: number;
    public email: string;

    public constructor(init: CreateFacilityDto) {
        Object.assign(this, init);
    }
}