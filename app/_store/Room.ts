import { generateName, genrateId } from "./helper";
export interface User {
  user_id: string;
  is_admin: boolean;
  rtcSession: RTCSessionDescription;
}

export class Room {
  room_name?: string;
  room_id: string;
  user_admin: User;
  user_candidate?: User;
  ready_to_connect: boolean;
  offers = [];

  constructor(rtcSession: RTCSessionDescription) {
    this.room_name = generateName();
    this.room_id = genrateId();
    this.ready_to_connect = false;
    this.user_admin = {
      is_admin: true,
      rtcSession,
      user_id: genrateId(),
    };
  }

  joinRoom(rtcSession: RTCSessionDescription) {
    this.user_candidate = {
      is_admin: false,
      rtcSession,
      user_id: genrateId(),
    };
    this.ready_to_connect = true;
  }
}
