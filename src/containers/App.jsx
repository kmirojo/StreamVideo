import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";

const App = () => {
  // Resumen React Hooks https://platzi.com/clases/1651-react-ejs/22668-lectura-react-hooks/
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });
  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  // console.log('videos');
  // console.log(videos);
  // console.log('setVideos');
  // console.log(setVideos);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist.length > 0 && (
        <Categories title="My List">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title="Trends">
        <Carousel>
          {videos.trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
