import React from 'react'
import PlaylistContainer from "./PlaylistContainer"
import SongListContainer from "./SongListContainer"

const App = (props) => {
  return (
    <div className="app row callout">
      <h1 className="title">React Music Player</h1>
      <div id="main">
        <PlaylistContainer 
          playlists={props.data.playlists}
        />
        <SongListContainer
          songs={props.data.songs} />
      </div>
    </div>  
  );
}

export default App






