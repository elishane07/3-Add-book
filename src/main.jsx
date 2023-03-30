import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BooksContext from './context/book'
import './index.css'
import { Provider } from "./context/book";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
         <App />
    </Provider>
   
)
