// src/App.jsx
import React from 'react'
import { Route } from 'react-router-dom'
import { Main, Login } from 'pages'

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App
