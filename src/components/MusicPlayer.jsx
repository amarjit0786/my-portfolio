import React, { useRef, useState, useEffect } from "react";

const tracks = [
  {
    name: "Hasdi Tu Reh Sohniye (Dil Diyan Gallan) - Parmish Verma ",
    url: "/hasdi.mp3",
  },
  {
    name: "Shada  - Parmish Verma ",
    url: "/Shada.mp3",
  },
  {
    name: "Boofer",
    url: "/boofer.mp3",
  },
];

const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleNext);
    };
  }, [currentTrackIndex]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-yellow-400">
        🎵 Now Playing
      </h2>
      <p className="mb-4 text-gray-800 dark:text-white">
        {currentTrack.name}
      </p>

      <audio ref={audioRef} src={currentTrack.url} preload="metadata" />

      <div className="flex items-center justify-center space-x-4 mb-4">
        <button onClick={handlePrev} className="text-2xl hover:scale-110">
          ⏮
        </button>
        <button onClick={handlePlayPause} className="text-2xl hover:scale-110">
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={handleNext} className="text-2xl hover:scale-110">
          ⏭
        </button>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        {formatTime(currentTime)} / {formatTime(duration || 0)}
      </div>
    </div>
  );
};

export default MusicPlayer;
