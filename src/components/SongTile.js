import React, { Fragment } from "react"

const SongTile = props => {
  return (
    <Fragment>
      <p>{props.songs[0].name} - {props.songs[0].artist}</p>
    </Fragment>
  )
}

export default SongTile