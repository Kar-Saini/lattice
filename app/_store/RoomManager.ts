import { Room } from "./Room";

export class RoomManager {
  private static instance: RoomManager;
  private rooms: Room[] = [];
  private constructor() {}

  public static getInstance() {
    if (!this.instance) this.instance = new RoomManager();
    return this.instance;
  }

  create_room(rtcSession: RTCSessionDescription) {
    const room = new Room(rtcSession);
    this.rooms.push(room);
    return { msg: "Room created", room };
  }

  join_room(room_id: string, rtcSession: RTCSessionDescription) {
    const room = this.rooms.find((room) => room.room_id === room_id);
    if (!room) return { msg: "Room not found" };
    const res = room.joinRoom(rtcSession);
    return res;
  }

  get_room(room_id: string) {
    return this.rooms.find((room) => room.room_id === room_id);
  }
}
