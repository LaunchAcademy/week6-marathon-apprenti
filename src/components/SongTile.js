import React, { Fragment } from "react"

const SongTile = props => {
  return (
    <Fragment>
      <p className={props.className} onClick={props.handleClick}>{props.name} - {props.artist}</p>
    </Fragment>
  )
}

export default SongTile