import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchItem from './components/SearchItem/SearchItem'
import ProductPageMain from './components/ProductPageMain/ProductPageMain'
import "./App.css"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchItem img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Laptop gamer prosaza" rating={4.6} tags={["gamer", "caro", "nvidia", "hdmi"]} price={5000} shopname="tuvi" description="lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff"/>} />
      <Route path="/productpagemain" element={
                                      <div className='testcont'>
                                        <ProductPageMain name="Asus Laptop-God 5000 16''" rating={4.5} price={4995.00} dtime={"5-6"} images={["https://www.pcworld.com/wp-content/uploads/2022/06/razer-laptop.jpg?quality=50&strip=all", "https://www.techspot.com/articles-info/1090/images/2021-07-28-image.jpg", "https://www.cnet.com/a/img/resize/c5b1d4844faa8d8395c0dc2510d74ec84997b0c8/hub/2022/04/26/0a286fff-7903-48be-b0cb-fa7e29826c53/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=528&width=940"]}  tags={["GAMER", "DISEÑO"]} specs={["16GB RAM", "HDMI", "RTX 3060", "1TB SSD"]}/>
                                        <div className='redcoso'></div>
                                      </div>
                                      } />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
