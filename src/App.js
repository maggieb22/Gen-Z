import React from "react"
import ReactDOM from "react-dom"

import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
            <Header />
            <MainContent />
            <Footer />
      </div>
    </div>
  );
}

export default App;
