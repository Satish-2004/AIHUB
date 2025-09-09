import { User } from "./users.model";

export interface Tool{
      id: number,
    name: String,
      rating: number,
      plan: String,
      description: String,
      tags: String,
      category: String,
      icon: String,
      link: String,
      users: Array<User>
}