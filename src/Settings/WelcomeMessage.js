import React from 'react'
import { AppContext } from '../App/AppProvider'

export default function Welcome(props) {
  return (
    <AppContext.Consumer>
      {
        ({ firstVisit }) =>
          firstVisit ?
            <div> Welcome to Deepak Dashboard, please selet your favorite coin the begin.</div> : null
      }
    </AppContext.Consumer>
  )
} 