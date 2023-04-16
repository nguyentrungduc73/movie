import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import GlobalStyle from './Component/GlobalStyle/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalStyle>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStyle>

)
