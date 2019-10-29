import { useState, useEffect } from "react";

const useInitialState = API => {
  // Resumen React Hooks https://platzi.com/clases/1651-react-ejs/22668-lectura-react-hooks/
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: []
  });
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  return videos;
};

export default useInitialState;
