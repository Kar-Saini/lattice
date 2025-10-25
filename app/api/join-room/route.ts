import { RoomManager } from "@/app/_store/RoomManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { room_id, rtcSession } = await req.json();
    console.log(room_id);
    const res = RoomManager.getInstance().join_room(room_id, rtcSession);
    const res2 = RoomManager.getInstance().get_room(room_id);
    return NextResponse.json(res2);
  } catch (error) {}
}
