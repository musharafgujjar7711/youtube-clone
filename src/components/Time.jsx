import moment from 'moment'
import React from 'react'

function Time({time}) {
    const videotime= moment()?.startOf("day").seconds(time).format("HH:mm:ss")
  return (
    <div>{videotime}</div>
  )
}

export default Time