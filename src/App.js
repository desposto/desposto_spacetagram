import React, { useState, useEffect } from "react";
import ImageBox from "./components/ImageBox";
import APILoadingScreen from "./components/APILoadingScreen";

//Variables used to set the start and end dates for API access
var today = new Date();
var day = String(today.getDate()).padStart(2, "0");
var month = String(today.getMonth() + 1).padStart(2, "0"); 
var year = today.getFullYear();
var startDate = "2021-" + "11" + "-" + "10";
var endDate = year + "-" + month + "-" + day; //end date is set to current day

function App() {
  const [images, setImages] = useState([]); //State to hold the images fetched from API
  const [isLoading, setIsLoading] = useState(true); //State used to detemine if images are still being fetched from API

  useEffect(() => {
    //called when page loads, uses apiFetch function to fetch data from API
    apiFetch();
  }, []);

  function apiFetch() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`
    )
      .then((res) => res.json()) //turns result into a json file
      .then((data) => {
        //Ensures that only images and their corresponding data are placed into the images array
        for (let i = 0; i < data.length; i++) {
          if (data[i].media_type === "image") {
            setImages((arr) => [...arr, data[i]]);
          }
        }
        setIsLoading(false); //sets loading state to false
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mx-auto cursor-pointer">
      {isLoading ? ( //if the loading state is true the loading screen is displayed, else the website is shown
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
              .reverse() //Reverses array so the images/data can be displayed in reverse chronological order
              .map(
                (
                  image,
                  index //maps the images and their index number to the ImageBox component
                ) => (
                  <ImageBox key={index} image={image} index={index} />
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
