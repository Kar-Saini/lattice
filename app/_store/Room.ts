import { generateName, genrateId } from "./helper";
export interface User {
  user_id: string;
  is_admin: boolean;
}

export class Room {
  room_name?: string;
  room_id: string;
  users: User[];
  room_admin_id?: string;
  ready_to_connect: boolean;
  maxUsers = 2;

  constructor() {
    this.room_name = generateName();
    this.room_id = genrateId();
    this.users = [];
    this.ready_to_connect = false;
  }
  add_user() {
    const numUsers = this.users.length;
    if (numUsers >= this.maxUsers) {
      return { msg: "Room full", ready_to_connect: this.ready_to_connect };
    }
    const user_id = genrateId();
    const is_admin = numUsers === 0;
    if (is_admin) {
      this.room_admin_id = user_id;
    }
    const user: User = {
      is_admin,
      user_id,
    };

    this.users.push(user);

    this.ready_to_connect = this.users.length === this.maxUsers;
    return { msg: "User added", user, ready_to_connect: this.ready_to_connect };
  }

  remove_user(user_id: string) {
    const user = this.users.find((user) => user.user_id === user_id);
    if (!user) return { msg: "User not found" };
    this.users = this.users.filter((u) => u.user_id !== user_id);
    return { msg: "User removed" };
  }
}
