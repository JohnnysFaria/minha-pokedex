import React from 'react'
import List from '../src/List/List'
import Container from './Utils/Container'
import Header from './Header/Header'
import './App.css'

function App() {

  return (
    <div>
    <Header/>
      <Container title={'All Pokemons'}>
        <List />
      </Container>
    </div>
  )
}

export default App
