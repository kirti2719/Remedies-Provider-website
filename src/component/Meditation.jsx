import React, { useState, useRef } from "react";
import bluemeditation from "../music/bluemeditation.mp3";
import meditation1 from "../music/meditation1.mp3";
import meditation2 from "../music/meditation2.mp3";
import meditation3 from "../music/meditation3.mp3";
import meditation4 from "../music/meditation4.mp3";
import meditation5 from "../music/meditation5.mp3";
import Sound1 from "../Image/Sound1.jpg";
import Sound2 from "../Image/Sound2.png";
import Sound3 from "../Image/Sound3.jpg";
import Sound4 from "../Image/Sound4.webp";
import Sound5 from "../Image/Sound5.webp";
import Sound6 from "../Image/Sound6.webp";
import "./Meditation.css";

const songs = [
  { id: 1, title: "Blue Meditation", src: bluemeditation, image: Sound1 },
  { id: 2, title: "Meditation 1", src: meditation1, image: Sound2 },
  { id: 3, title: "Meditation 2", src: meditation2, image: Sound3 },
  { id: 4, title: "Meditation 3", src: meditation3, image: Sound4 },
  { id: 5, title: "Meditation 4", src: meditation4, image: Sound5 },
  { id: 6, title: "Meditation 5", src: meditation5, image: Sound6 }
];

const Playlist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentIndex];

  // Play selected song
  const playSong = (index) => {
    setCurrentIndex(index);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  // Play previous song
  const playPrevious = () => {
    const newIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    playSong(newIndex);
  };

  // Play next song
  const playNext = () => {
    const newIndex = currentIndex === songs.length - 1 ? 0 : currentIndex + 1;
    playSong(newIndex);
  };

  return (
    <div className="playlist-container">
      <h1 className="playlist-title">Meditation Playlist</h1>

      {/* Playlist */}
      <div className="song-list">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={`song-item ${index === currentIndex ? "active" : ""}`}
            onClick={() => playSong(index)}
          >
            <img src={song.image} alt={song.title} className="song-image" />
            <p>{song.title}</p>
          </div>
        ))}
      </div>

      {/* Audio Player Controls */}
      <div className="audio-controls">
        <button onClick={playPrevious}>&#9665; Prev</button>
        <audio ref={audioRef} controls className="playlist-audio">
          <source src={currentSong.src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button onClick={playNext}>Next &#9655;</button>
      </div>

      {/* Download Button */}
      <a
        href={currentSong.src}
        download={`${currentSong.title}.mp3`}
        className="playlist-download-btn"
      >
        Download {currentSong.title}
      </a>
    </div>
  );
};

export default Playlist;
