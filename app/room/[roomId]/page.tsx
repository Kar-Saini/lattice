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

      <div className="w-1/2 flex flex-col justify-between p-6 bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium shadow-sm">
              User 1
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium shadow-sm">
              User 2
            </span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200">
            Save
          </button>
        </div>

        <div className=" p-2 mb-12 flex-1">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Notes</h3>
          <textarea
            className="w-full h-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none bg-white"
            placeholder="Write observations or hints here..."
          />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden bg-gray-200 shadow-lg">
              <video
                ref={localVideoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-56 object-cover"
              />
              <span className="absolute bottom-2 left-2 text-sm bg-black/50 text-white px-2 py-1 rounded">
                You
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-gray-200 shadow-lg">
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-56 object-cover"
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
