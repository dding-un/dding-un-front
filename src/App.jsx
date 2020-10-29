// src/App.jsx
import React from 'react'
import { Route } from 'react-router-dom'
import { Main } from 'pages'

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
    </>
  );
}

export default App
