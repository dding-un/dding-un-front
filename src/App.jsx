// src/App.jsx
import React from 'react'
import { Route } from 'react-router-dom'
import { Main, Oauth } from 'pages'

const App = () => {
  return (
    <>
      <Route exact path="/" component={Main} />
      <Route exact path="/oauth" component={Oauth} />
    </>
  );
}

export default App
