import React from 'react'
import StateContext from './Context.js'
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Profiles.css'

const Profiles = () => {
  
  const ContactProfiles = useContext(StateContext).contactProfiles.map(profile=> {
    return (<div>
      <Link to={`/profiles/${profile.id}`}>
      <p>{`${profile.firstName} ${profile.lastName}`}</p>
      </Link>
      <Link to={`/profiles/${profile.id}/profile-image`}>
      <img src={profile.profileImage} height="100"/>
      </Link>
    </div>)
  })

  return (
    <>
      <h1 className="header">Profiles</h1>
      <ul className="profiles">{ContactProfiles}</ul>
    </>
  )
}

export default Profiles;