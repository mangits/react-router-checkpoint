import React from 'react'
import StateContext from './Context.js'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

  const NewsArticles = useContext(StateContext).newsArticles.map((article) => {
    return (<Link><div>
    <h2>{article.title}</h2>
    <p>{article.article}</p>
    </div></Link>)
  })

  return (
    <div className="Primary">
      <h1>My Profile Page</h1>
      <img height="400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZjrlCaWVah5VGjh3XXr8Y9r9lnnelaO0jY4CUag0BrHtEcp7"/>
      <div className="Information">
        <p><strong>Name:</strong> Floyd Mayweather</p>
        <p><strong>Hobbies:</strong> I like to box...</p>
        <p><strong>Birthday:</strong> February 24, 1977</p>
      </div>
      <h1>Articles for you:</h1>
      <div className="News">{NewsArticles}</div>
    </div> 
  )
}

export default Home;