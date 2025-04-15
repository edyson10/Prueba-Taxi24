export class Location {
  constructor(
    public readonly id: string,
    public readonly driverId: string,
    public latitude: number,
    public longitude: number,
    public timestamp: Date,
  ) {}
}