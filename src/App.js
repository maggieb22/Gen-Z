import React from "react"

import Header from "./components/Header"
import MainContent from "./MainContent"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div class="grey App">
      <div>
            <Header />
            <MainContent />
            <Footer />
      </div>
    </div>
  );
}

export default App;
