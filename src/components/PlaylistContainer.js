import React, { useState } from "react"
import PlaylistTile from "./PlaylistTile"

const PlaylistContainer = props => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(props.playlists[0].id)
  const allThePlaylistTiles = props.playlists.map((playlist) => {
    const handleClick = () => {
      return setSelectedPlaylist(playlist.id);
    }
    let className = "";
    if (selectedPlaylist === playlist.id) className += "selected"
    return <PlaylistTile className={className} onClick={handleClick} key={playlist.id} playlist={playlist} />
  });

  return (
    <div className="columns small-6">
      <h1>Playlists</h1>
      {allThePlaylistTiles}
    </div>
  )
}
export default PlaylistContainer