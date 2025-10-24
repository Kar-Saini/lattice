import { RoomManager } from "@/app/_store/RoomManager";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const res = RoomManager.getInstance().create_room();
    return NextResponse.json(res);
  } catch (error) {}
}
