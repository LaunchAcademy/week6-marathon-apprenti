import React from "react"
import SongTile from "./SongTile"
const SongListContainer = props => {
  return(
    <div className="columns small-6">
      <h1>Songs</h1>
      <SongTile songs={props.songs}/>
    </div>
  );
};

export default SongListContainer