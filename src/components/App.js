import React, { useState } from 'react'
import PlaylistContainer from "./PlaylistContainer"
import SongListContainer from "./SongListContainer"

const App = (props) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(prop.data.playlists[0].id)
  const [selectedSong, setSelectedSong] = useState(null)
  return (
    <div className="app row callout">
      <h1 className="title">React Music Player</h1>
      <div id="main">
        <PlaylistContainer 
          selectedPlaylist={selectedPlaylist}
          setSelectedPlaylist={setSelectedPlaylist}
          playlists={props.data.playlists}
        />
        <SongListContainer
          selectedSong={selectedSong}
          setSelectedSong={setSelectedSong}
          songs={props.data.songs} 
        />
      </div>
    </div>  
  );
}

export default App






