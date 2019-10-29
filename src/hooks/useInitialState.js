import { useState, useEffect } from "react";

// const useInitialState = () => {
//   console.log("SEBAS LOCAAAA");
// };

const API = "http://localhost:3000/initialState";

const useInitialState = () => {
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

  //   console.log(API);

  return videos;
};

export default useInitialState;
