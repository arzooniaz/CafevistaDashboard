import React, { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import "tailwindcss/tailwind.css";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

function AudioPlayer({ audioFile }) {
  const [playing, setPlaying] = useState(false);
  const waveRef = useRef(null);
  const waveSurfer = useRef(null);

  useEffect(() => {
    let isMounted = true; // Track component mount status

    const initializeWaveSurfer = async () => {
      if (!waveRef.current || !audioFile) return; // Ensure audio file is provided

      try {
        waveSurfer.current = WaveSurfer.create({
          container: waveRef.current,
          waveColor: "#000",
          progressColor: "#333",
          cursorColor: "#000",
          barWidth: 2,
          barRadius: 3,
          responsive: true,
          height: 20,
          backend: "WebAudio",
        });

        // Asynchronously load the audio file
        await waveSurfer.current.load(audioFile);

        // Ensure the component is still mounted before proceeding
        if (isMounted) {
          waveSurfer.current.on("finish", () => {
            setPlaying(false);
          });
        }
      } catch (error) {
        console.error("Error initializing WaveSurfer:", error);
      }
    };

    initializeWaveSurfer();

    return () => {
      isMounted = false;
      if (waveSurfer.current) {
        waveSurfer.current.destroy();
        waveSurfer.current = null;
      }
    };
  }, [audioFile]);

  const togglePlay = () => {
    if (waveSurfer.current) {
      setPlaying(!playing);
      waveSurfer.current.playPause();
    }
  };

  return (
    <div className="flex flex-row  gap-2 mb-4 items-center w-52 border border-gray-300 rounded-lg p-4">
      <button className="focus:outline-none" onClick={togglePlay}>
        {playing ? (
          <FaPauseCircle className="text-3xl" />
        ) : (
          <FaPlayCircle className="text-3xl" />
        )}
      </button>
      <div ref={waveRef} className="w-full rounded-lg"></div>
    </div>
  );
}

export default AudioPlayer;
