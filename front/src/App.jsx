import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchItem from './components/SearchItem/SearchItem'
import ProductPageMain from './components/ProductPageMain/ProductPageMain'
import ProductCard from './components/ProductCard/ProductCard'
import "./App.css"
import { ProductInfo } from './utils/ProductInfo';
import { StoreInfo } from './utils/StoreInfo';

function App() {
  const products_data: { product: ProductInfo, store: StoreInfo[] }[] = [{
    product: {
      name: "Asus Laptop-God 5000 16''",
      rating: 4.5,
      price: 4995.00,
      dtime: "5-6",
      images: ["https://www.pcworld.com/wp-content/uploads/2022/06/razer-laptop.jpg?quality=50&strip=all", "https://www.techspot.com/articles-info/1090/images/2021-07-28-image.jpg", "https://wallpaperset.com/w/full/f/0/1/461126.jpg"]
      tags: ["GAMER", "DISEÑO"],
      specs: ["16GB RAM", "HDMI", "RTX 3060", "1TB SSD"]
    }
    store: {
      envio: "5-6",
    }
  }
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchItem img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Laptop gamer prosaza" rating={4.6} tags={["gamer", "caro", "nvidia", "hdmi"]} price={5000} shopname="tuvi" description="lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff" />} />
          <Route path="/productpagemain" element={
            <div className='testcont'>
              <ProductPageMain product />
              <div className='redcoso'></div>
            </div>
          } />
          <Route path="/productcard" element={<div className='testcont2'>
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Asus Gamer-Beast 4545 18''" rating={4.6} tags={["Asus", "Gaming", "Nvidia", "SSD"]} dtime="2-3" />
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Asus Gamer-Beast 4545 18''" rating={4.6} tags={["Asus", "Gaming", "Nvidia", "SSD"]} dtime="2-3" />
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Asus Gamer-Beast 4545 18''" rating={4.6} tags={["Asus", "Gaming", "Nvidia", "SSD"]} dtime="2-3" />
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Asus Gamer-Beast 4545 18''" rating={4.6} tags={["Asus", "Gaming", "Nvidia", "SSD"]} dtime="2-3" />
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Asus Gamer-Beast 4545 18''" rating={4.6} tags={["Asus", "Gaming", "Nvidia", "SSD"]} dtime="2-3" />
            <ProductCard image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80" name="Asus Gamer-Beast 4545 18''" rating={4.6} tags={["Asus", "Gaming", "Nvidia", "SSD"]} dtime="2-3" />
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
