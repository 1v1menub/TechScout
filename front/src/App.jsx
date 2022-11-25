import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchItem from './components/SearchItem/SearchItem';
import ProductPageMain from './components/ProductPageMain/ProductPageMain';
import ProductCard from './components/ProductCard/ProductCard';
import WelcomePage from './components/WelcomePage/WelcomePage';
import SideBar from './components/SideBar/SideBar';
import SearchResult from './components/SearchResult/SearchResult';

import UserIcon from './assets/user_icon.png';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SearchItem
                img="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                name="Laptop gamer prosaza"
                rating={4.6}
                tags={['gamer', 'caro', 'nvidia', 'hdmi']}
                price={5000}
                shopname="tuvi"
                description="lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff lorem ipsum jaja diff"
              />
            }
          />

          {/* enviar busqueda aca */}
          <Route path="/search" element={<SearchResult search="mock" />} />

          <Route
            path="/productpagemain"
            element={
              <div className="testcont">
                <ProductPageMain
                  name="Asus Laptop-God 5000 16''"
                  rating={4.5}
                  price={4995.0}
                  dtime={'5-6'}
                  images={[
                    'https://www.pcworld.com/wp-content/uploads/2022/06/razer-laptop.jpg?quality=50&strip=all',
                    'https://www.techspot.com/articles-info/1090/images/2021-07-28-image.jpg',
                    'https://wallpaperset.com/w/full/f/0/1/461126.jpg'
                  ]}
                  tags={['GAMER', 'DISEÑO']}
                  specs={['16GB RAM', 'HDMI', 'RTX 3060', '1TB SSD']}
                />
                <div className="redcoso"></div>
              </div>
            }
          />

          <Route
            path="/productcard"
            element={
              <div className="testcont2">
                <ProductCard
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                  name="Asus Gamer-Beast 4545 18''"
                  rating={4.6}
                  tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                  dtime="2-3"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                  name="Asus Gamer-Beast 4545 18''"
                  rating={4.6}
                  tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                  dtime="2-3"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                  name="Asus Gamer-Beast 4545 18''"
                  rating={4.6}
                  tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                  dtime="2-3"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                  name="Asus Gamer-Beast 4545 18''"
                  rating={4.6}
                  tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                  dtime="2-3"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                  name="Asus Gamer-Beast 4545 18''"
                  rating={4.6}
                  tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                  dtime="2-3"
                />
                <ProductCard
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                  name="Asus Gamer-Beast 4545 18''"
                  rating={4.6}
                  tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                  dtime="2-3"
                />
              </div>
            }
          />
          <Route
            path="/welcomescreen"
            element={
              <div className="testcont3">
                <SideBar
                  user_image={UserIcon}
                  // user_image="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_5yec68sk/def_height/2700/def_width/2700/version/100012/type/1"
                  user_name="PEPE"
                />
                <div className="main-body">
                  <SearchBar />

                  <div className="testcont2">
                    <ProductCard
                      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                      name="Asus Gamer-Beast 4545 18''"
                      rating={4.6}
                      tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                      dtime="2-3"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                      name="Asus Gamer-Beast 4545 18''"
                      rating={4.6}
                      tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                      dtime="2-3"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                      name="Asus Gamer-Beast 4545 18''"
                      rating={4.6}
                      tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                      dtime="2-3"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                      name="Asus Gamer-Beast 4545 18''"
                      rating={4.6}
                      tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                      dtime="2-3"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                      name="Asus Gamer-Beast 4545 18''"
                      rating={4.6}
                      tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                      dtime="2-3"
                    />
                    <ProductCard
                      image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&w=1000&q=80"
                      name="Asus Gamer-Beast 4545 18''"
                      rating={4.6}
                      tags={['Asus', 'Gaming', 'Nvidia', 'SSD']}
                      dtime="2-3"
                    />
                  </div>
                </div>
                {/* <WelcomePage /> */}
              </div>
            }
          />
          <Route
            path="/sidebar"
            element={
              <div className="sidebar">
                <SideBar
                  user_image={UserIcon}
                  // user_image="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_5yec68sk/def_height/2700/def_width/2700/version/100012/type/1"
                  user_name="PEPE"
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
