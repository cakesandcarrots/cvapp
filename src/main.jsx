import React from 'react'
import ReactDOM from 'react-dom/client'
import Eduexp from './components/Eduexp'
import Geninfo from './components/Geninfo'
import Pracexp from './components/Pracexp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Geninfo></Geninfo>
    <Eduexp></Eduexp>
    <Pracexp></Pracexp>
  </React.StrictMode>,
)
