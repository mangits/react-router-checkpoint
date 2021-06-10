import React from 'react'
import StateContext from './Context.js'
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Profiles = () => {
  
  const ContactProfiles = useContext(StateContext).contactProfiles.map(profile=> {
    return (<li>
      <Link to={`/profiles/${profile.id}`}>
      <p>{`${profile.firstName} ${profile.lastName}`}</p>
      </Link>
      <Link to={`/profiles/${profile.id}/profile-image`}>
      <img src={profile.profileImage} height="100"/>
      </Link>
    </li>)
  })

  return (
    <>
      <h1>Profiles</h1>
      <ul>{ContactProfiles}</ul>
    </>
  )
}

export default Profiles;