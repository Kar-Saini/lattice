import { Room, User } from "./Room";

export class RoomManager {
  private static instance: RoomManager;
  private rooms: Room[] = [];
  private constructor() {}

  public static getInstance() {
    if (!this.instance) this.instance = new RoomManager();
    return this.instance;
  }

  create_room() {
    const room = new Room();
    this.rooms.push(room);
    return { msg: "Room created", room };
  }

  join_room(room_id: string) {
    const room = this.rooms.find((room) => room.room_id === room_id);
    if (!room) return { msg: "Room not found" };
    const res = room.add_user();
    return res;
  }

  remove_user(room_id: string, user_id: string) {
    const room = this.rooms.find((room) => room.room_id === room_id);
    if (!room) return { msg: "Room not found" };
    const res = room.remove_user(user_id);
    return res;
  }

  get_room(room_id: string) {
    return this.rooms.find((room) => room.room_id === room_id);
  }
}
