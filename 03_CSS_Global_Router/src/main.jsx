
import React from 'react'
import ReactDOM from 'react-dom/client'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home/'
import { Sobre } from './pages/Sobre/'
import { Cadastro } from './pages/Cadastro/'

import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Routes />
      </ThemeProvider>
  </React.StrictMode>,
)
