import "./App.css";
import React, { useState, useEffect } from "react";
import ImageBox from "./components/ImageBox";
import APILoadingScreen from "./components/APILoadingScreen";

var today = new Date();
var day = String(today.getDate()).padStart(2, "0");
var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
var year = today.getFullYear();
var startDate = "2021-" + "11" + "-" + "10";
var endDate = year + "-" + month + "-" + day;

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiFetch();
  }, []);

  function apiFetch() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i].media_type === "image") {
            setImages((arr) => [...arr, data[i]]);
          }
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mx-auto cursor-pointer">
      {isLoading ? (
        <APILoadingScreen />
      ) : (
        <div className="text-2xl flex justify-center">
          <div className="grid grid-cols-1 bg-gray-100">
            <div className="ml-3 grid-rows-2">
              <div className="font-bold">Spacetagram</div>
              <div className="text-sm">
                Brought to you by NASA Picture of the Day API
              </div>
            </div>
            {images
              .slice(0)
              .reverse()
              .map((image, index) => (
                <ImageBox key={index} image={image} index={index} />
              ))}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
