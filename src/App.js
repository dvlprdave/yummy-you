import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './config/theme';

import Recipe from './components/recipe';
import './App.css';
import Header from './components/header';


const App = () => {
  const APP_ID = '6d243ce5'
  const APP_KEY = '3b395a8668da6fa8951a17c579a57704'

  const [recipes, setRecipes] = useState([]) // sets initial state to zero
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, []) // Only when counter changes will useEffect run

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <form onSubmit={getSearch}>
          <input
            className='search-bar'
            type='text' value={search}
            onChange={updateSearch} />
          <button type='submit'>Search</button>
        </form>

        {
          !recipes ? <h1>Loading</h1> :
            <RecipeWrapper>
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  nutrients={recipe.recipe.totalNutrients.CHOCDF.label}
                />
              ))}
            </RecipeWrapper>
        }
      </AppWrapper>
    </ThemeProvider>
  )
}

const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
`

const RecipeWrapper = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 3.5rem;
  justify-items: space-between;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

export default App;