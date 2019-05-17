import React from 'react'

const Recipe = ({ title, ingredients, calories, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>{ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
      ))}</ul>
      <p>{calories}</p>
      <img src={image} alt='food' />
    </div>
  )
}

export default Recipe