import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import Home from './pages/Home'
import { NewMovie } from './pages/NewMovie'
import { Details } from './pages/Details'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Home /> */}
      {/* <NewMovie /> */}
      {/* <Details /> */}
      {/* <SignIn /> */}
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
)
