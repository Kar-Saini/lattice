"use client";
import React, { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

const RoomPage = () => {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {}, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/2 border-r border-gray-300">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// Start coding here..."
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </div>

      <div className="w-1/2 flex flex-col  justify-between p-4 space-y-6 bg-white">
        <div>Notes</div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Live Interview
          </h2>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-md">
              <video
                ref={localVideoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-48 object-cover"
              />
              <span className="absolute bottom-2 left-2 text-sm bg-black/50 text-white px-2 py-1 rounded">
                You
              </span>
            </div>

            <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-md">
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-48 object-cover"
              />
              <span className="absolute bottom-2 left-2 text-sm bg-black/50 text-white px-2 py-1 rounded">
                Guest
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
