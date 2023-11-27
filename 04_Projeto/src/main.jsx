import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import { Home } from './pages/Home'
import { Destiny } from './pages/Destiny'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <GlobalStyles/>
    {/* <Destiny /> */}
    <Home/>
   </ThemeProvider>
  </React.StrictMode>,
)
