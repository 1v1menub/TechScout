import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchItem from './components/SearchItem/SearchItem'
import "./App.css"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchItem img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Laptop gamer prosaza" rating={4.6} tags={["gamer", "caro", "nvidia", "hdmi"]} price={5000} shopname="tuvi" description="lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff"/>} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
