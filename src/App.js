import './App.css';
import Nav from './Components/Nav.js';
import About from './Components/About.js';
import Home from './Components/Home.js';
import Profiles from './Components/Profiles.js';
import StateContext from './Components/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useContext } from 'react'

function App() {

  const [state, setState] = useState({
    newsArticles: [
        { 
            title: "Winning at Life!",
            article: "There are many ways to do so... but the best is just try, try, try again! Click here to learn more..."
        },
        { 
            title: "Florida is at it again",
            article: "Florida man has been caught on camera licking the doorbells of middle-class neighbourhoods."
        },
        { 
          title: "Javscript is DEAD",
          article: "That's right, the world is ending. We are all moving to Clojure for web development and pending the apocalypse."
        },
        //add more stories here in this array!
    ],
    contactProfiles: [
        {
          firstName: "Willie",
          lastName: "Dustice",
          birthday: "01/01/1978 00:00:00",
          profileImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6M0OVJQ1RG_IiXT6MzlFvCGAlz1CyGQHUF36LwBekdIro-uYv",
          id: 1
        },
        {
          firstName: "Jelly",
          lastName: "Dustice",
          birthday: "01/01/1978 00:00:05",
          profileImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6M0OVJQ1RG_IiXT6MzlFvCGAlz1CyGQHUF36LwBekdIro-uYv",
          id: 2
        },
        {
        firstName: "Agastine",
        lastName: "Dustice",
        birthday: "01/01/1978 00:00:10",
        profileImage: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6M0OVJQ1RG_IiXT6MzlFvCGAlz1CyGQHUF36LwBekdIro-uYv",
        id: 3
      }
    ]
  })

  const ProfileRoutes = state.contactProfiles.map(profile=> {
    return (<Route exact path={`/profiles/${profile.id}`} render={() =>
    {
      return (
        <>
        <Profiles />
        <p>{`Name: ${profile.firstName} ${profile.lastName}`}</p>
        <p>{`Birthday: ${profile.birthday}`}</p>
        </>)
    }} />)
  })

  const ProfileImageRoutes = state.contactProfiles.map(profile=> {
    return (<Route exact path={`/profiles/${profile.id}/profile-image/`} render={() =>
    {
      return (
        <>
        <Profiles />
        <p>{`Name: ${profile.firstName} ${profile.lastName}`}</p>
        <p>{`Birthday: ${profile.birthday}`}</p>
        <img src={profile.profileImage} height="200"/>
        </>)
    }} />)
  })

  return (
    <StateContext.Provider value={{...state}}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profiles" component={Profiles} />
      </Switch>
      {ProfileRoutes}
      {ProfileImageRoutes}
    </StateContext.Provider>
  );
}

export default App;
