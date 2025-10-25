import { RoomManager } from "@/app/_store/RoomManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { roomId } = await req.json();
    const room = RoomManager.getInstance().get_room(roomId);

    if (room?.ready_to_connect) {
      return NextResponse.json({ answer: room.user_candidate?.rtcSession });
    } else {
      return NextResponse.json({ msg: "Waiting for candidate" });
    }
  } catch (error) {
    console.log("Err");
  }
}
