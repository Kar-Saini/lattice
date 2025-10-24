"use client";
import React, { useEffect, useRef, useState } from "react";

const MainPage = () => {
  const [roomId, setRoomId] = useState<null | string>(null);
  const [user, setUser] = useState();
  const [roomName, setRoomName] = useState<null | string>(null);
  const peerConnectionRef = useRef<null | RTCPeerConnection>(null);

  useEffect(() => {
    if (!peerConnectionRef.current) {
      peerConnectionRef.current = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
      });
    }
    console.log(peerConnectionRef.current);
  }, []);

  const handleCreateRoom = async () => {
    const res = await fetch("/api/create-room", {
      method: "POST",
    });
    const jsonRes = await res.json();
    console.log("Create Room clicked", jsonRes);
  };

  const handleJoinRoom = async () => {
    if (!roomId) return alert("Enter a room ID to join");
    const res = await fetch("/api/join-room", {
      method: "POST",
      body: JSON.stringify({ room_id: roomId }),
    });
    const jsonRes = await res.json();
    console.log("Join Room clicked", jsonRes);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Real-Time Interview Rooms
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Create or join a collaborative coding room. Video, code, and
        communication — all in real time.
      </p>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Room Name (optional)"
            value={roomName ?? ""}
            onChange={(e) => setRoomId(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleCreateRoom}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow"
          >
            Create Room
          </button>
        </div>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Enter Room ID"
            value={roomId ?? ""}
            onChange={(e) => setRoomId(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleJoinRoom}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
