import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './components/Context'
import store from './components/store/store.jsx';
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </CounterProvider> */}
  </React.StrictMode>,
)
