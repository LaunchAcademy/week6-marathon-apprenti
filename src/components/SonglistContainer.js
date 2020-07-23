import React, { useState } from "react";
import SongTile from "./SongTile"

const SongListContainer = props => {
  const [selectedSong, setSelectedSong] = useState(null);
  const allTheSongs = props.songs.map(song => {
    const handleClick = () => {
      if (selectedSong === song.id) {
        setSelectedSong(null);
      } else {
        setSelectedSong(song.id);
      }
    }
    let className = (selectedSong === song.id) ? "selected" : "";
  return(
    <SongTile 
      key={song.id}
      name={song.name}
      artist={song.artist}
      handleClick={handleClick}
      className={className}
    />
  )
})
  return(
    <div className="columns small-6">
      <h1>Songs</h1>
      {allTheSongs}
    </div>
  );
};

export default SongListContainer