import "./App.css";
import React, { useState, useEffect } from "react";
import ImageBox from "./components/ImageBox";
import APILoadingScreen from "./components/APILoadingScreen";

var today = new Date();
var day = String(today.getDate()).padStart(2, "0");
var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var year = today.getFullYear();
var defaultStartDate = "2022-" + "01" + "-" + "03";
var defualtEndDate = year + "-" + month + "-" + day;

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${defaultStartDate}&end_date=${defualtEndDate}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto cursor-pointer">
      {isLoading ? (
        <APILoadingScreen />
      ) : (
        <div className="text-2xl flex justify-center">
          <div className="grid grid-cols-1 bg-gray-100">
            <div className="ml-3 grid-rows-2">
              <div className="font-bold">Spacetagram</div>
              <div className="text-sm">Brought to you by NASA Picture of the Day API</div>
            </div>
            {images.map((image, index) => (
              <ImageBox key={index} image={image} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
