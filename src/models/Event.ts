export class Event {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: Date,
    public location: string,
    public category: string,
    public capacity: number
  ) {}
}
//ce code cree une une classe representant un evenement avec les qttributs precedents