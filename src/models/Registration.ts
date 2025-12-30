import { Event } from "./Event";
import { User } from "./User";

export class Registration {
  constructor(
    public user: User,
    public event: Event
  ) {}
}
