import React, { useState } from 'react'
import styled from 'styled-components'

const Recipe = ({ title, ingredients, calories, image, nutrients }) => {
  const [toggleIngredient, setIngredientToggle] = useState(false)

  const toggleIngredientHandler = () => {
    setIngredientToggle(true)
  }

  return (
    <RecipeCard>
      <Image src={image} alt='food' />
      <RecipeDetails>
        <Title>{title}</Title>
        <IngredientBtn onClick={toggleIngredientHandler}>View Ingredients</IngredientBtn>
        {toggleIngredient ? <IngredientsList>{ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}</IngredientsList> : null}
        <Dietary>Calories: {calories}</Dietary>
        <h2>nutrients: {nutrients}</h2>
      </RecipeDetails>
    </RecipeCard>
  )
}

const RecipeCard = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 26px 37px 83px -33px rgba(0,0,0,0.6);
`

const RecipeDetails = styled.div`
  padding: 1.3rem;
`

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 1.4rem;
`

const Image = styled.img`
  object-fit: cover;
  border-radius: 15px;
`

const IngredientBtn = styled.button`
  border: 1px solid black;
  background: white;
  font-size: 1rem;
`

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
`

const Dietary = styled.p`
  font-weight: bold;
`

export default Recipe