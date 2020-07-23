import React, { Fragment, useState } from "react"

const PlaylistTile = (props) => {
  
  return (
    <Fragment>
    <p className={props.className} onClick={props.onClick}>{props.playlist.name}</p>
    </Fragment>
  )
}

export default PlaylistTile