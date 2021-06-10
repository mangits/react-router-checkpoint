import React from 'react'
import StateContext from './Context.js'
import { useContext } from 'react'

const Home = () => {

  const NewsArticles = useContext(StateContext).newsArticles.map((article) => {
    return (<div>
    <h2>{article.title}</h2>
    <p>{article.article}</p>
    </div>)
  })

  return (
    <div>
      <h1>My Profile Page</h1>
      <div>
        <p>Floyd Mayweather</p>
        <p>I like to box...</p>
        <p>February 24, 1977</p>
        <img height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZjrlCaWVah5VGjh3XXr8Y9r9lnnelaO0jY4CUag0BrHtEcp7"/>
      </div>
      <div>{NewsArticles}</div>
    </div> 
  )
}

export default Home;