"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";

registerLocale("en", en);
setDefaultLocale("en");

const questions = [
  "destination",
  "startDate",
  "endDate",
  "interests",
  "visa",
  "flight",
  "fname",
  "lname",
  "email",
];

const questionLabels = {
  destination: "Where would you like to go?",
  startDate: "When do you plan to start your trip?",
  endDate: "When do you plan to end your trip?",
  interests: "What experiences are you most interested in? (Please choose 3)",
  visa: "Have you applied for a visa?",
  flight: "Have you booked your flights?",
  fname: "Please provide your first name:",
  lname: "Please provide your last name:",
  email: "Please provide your email address:",
};

const TripPlanningForm = () => {
  const [formStarted, setFormStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: null,
    endDate: null,
    interests: [],
    visa: "",
    flight: "",
    fname: "",
    lname: "",
    email: "",
  });
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleStartForm = () => {
    setFormStarted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          interests: [...prevData.interests, value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          interests: prevData.interests.filter(
            (interest) => interest !== value
          ),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    //   const apiUrl = 'http://localhost:3001/travelPlan/create';

    //   // Create a request object with the necessary options
    //   const requestOptions = {
    //     method: 'POST', // or 'PUT', 'GET', 'DELETE' depending on your API
    //     headers: {
    //       'Content-Type': 'application/json', // Set the content type to JSON
    //     },
    //     body: JSON.stringify(formData), // Convert formData to JSON
    //   };

    //   // Make the API call
    //   fetch(apiUrl, requestOptions)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json(); // Parse the response as JSON
    //     })
    //     .then((data) => {
    //       // Handle the API response data here
    //       console.log("API Response:", data);
    //     })
    //     .catch((error) => {
    //       // Handle errors here
    //       console.error('Error:', error);
    //     });

    //     setIsLoading(true);

    //   setTimeout(() => {
    const responseData = {
      images: [
        "https://i.pinimg.com/564x/01/3c/48/013c48a8225226a226c8f3bcb0df4f17.jpg",
        "https://i.pinimg.com/564x/f2/a7/6d/f2a76d7d1a7540c124de3f05f560e844.jpg",
        "https://i.pinimg.com/564x/c1/cf/39/c1cf390168e0c71432661375cb34c911.jpg",
      ],
    };

    setApiData(responseData);
    setIsLoading(false);
    setSubmitted(true);
    // }, 2000);
  };

  useEffect(() => {
    if (apiData) {
      console.log("API Data:", apiData);
    }
  }, [apiData]);

  const renderQuestion = () => {
    if (!formStarted) {
      return (
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-bold mb-8 text-center">
            Plan Your Trip
          </h2>
          <button
            type="button"
            onClick={handleStartForm}
            className="block w-48 bg-slate-800 hover:bg-white text-white hover:text-slate-800 py-2 px-4 rounded mt-4 transition duration-300 transform hover:scale-105"
          >
            Plan it now
          </button>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];

    let inputElement;
    if (currentQuestion === "interests") {
      inputElement = ["Hiking", "Sightseeing", "Beach", "Food", "Luxury"].map(
        (interest) => (
          <div key={interest} className="mb-2">
            <label className="flex items-center text-white text-xl mb-2 ml-4">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleChange}
                className="form-checkbox rounded-full h-4 w-4 mr-4"
              />
              {interest}
            </label>
          </div>
        )
      );
    } else if (
      currentQuestion === "startDate" ||
      currentQuestion === "endDate"
    ) {
      inputElement = (
        <DatePicker
          selected={formData[currentQuestion]}
          onChange={(date) =>
            setFormData({ ...formData, [currentQuestion]: date })
          }
          dateFormat="yyyy-MM-dd"
          className="w-full border-b-4 border-gray-300 rounded p-2 text-black"
        />
      );
    } else {
      inputElement = (
        <input
          type={currentQuestion === "email" ? "email" : "text"}
          id={currentQuestion}
          name={currentQuestion}
          value={formData[currentQuestion]}
          onChange={handleChange}
          className="align-left w-96 bg-slate-800 border-b-4 border-gray-300 p-2"
        />
      );
    }

    return (
      <div className="flex flex-col items-center">
        <h2 className="text-7xl font-bold mb-20 text-center">
          {questionLabels[currentQuestion]}
        </h2>
        <div className="mb-4">{inputElement}</div>
        <button
          type="button"
          onClick={
            currentQuestionIndex === questions.length - 1
              ? handleSubmit
              : handleNext
          }
          className="block w-48 bg-slate-800 hover:bg-white text-white hover:text-slate-800 py-2 px-4 rounded mt-4 transition duration-300 transform hover:scale-105"
        >
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800 text-white">
      {submitted && !isLoading ? (
        <div className=" px-28">
          <h2 className="text-6xl font-bold text-center mb-8">
            Here is your dream trip,{formData.fname} !
          </h2>
          <p className="text-center mb-24 text-4xl font-bold">
            Explore{" "}
            <a href="#" className="underline">
              {formData.destination}
            </a>
          </p>
          <div className="flex justify-center gap-24">
            {apiData.images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt="https://i.pinimg.com/564x/01/3c/48/013c48a8225226a226c8f3bcb0df4f17.jpg"
                className="mx-2 max-h-96 min-w-96"
              />
            ))}
          </div>
          <div className=" text-white mt-5 font-bold text-2xl">
            <div>Duration: 7-10 Days </div>
            <div>
              <div className="mt-3 font-medium text-xl">Day 1-2: Jaipur</div>
              <div className=" mt-4">
                Arrive in Jaipur and check into your hotel. Visit the
                magnificent Amber Fort. Take an elephant ride to the top for
                amazing views.
                
              </div>
              
              <div className="mt-3 font-medium text-xl">
                Day 3-4: Jodhpur (The Blue City)
              </div>
              <div className=" mt-4">
                Take a train or bus to Jodhpur. Check into your hotel and admire
                the blue-washed houses sprawled below the Mehrangarh Fort.
              </div>
              <div className="mt-3 font-medium text-xl">
                Day 5-6: Udaipur (The City of Lakes)
              </div>
              <div className=" mt-4">
                Travel to the romantic city of Udaipur. Check into your hotel,
                preferably one with a lake view. Take a boat ride on the
                picturesque Lake Pichola and visit the iconic Lake Palace.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">{renderQuestion()}</div>
      )}

      {isLoading && <p className="mt-4">Loading images...</p>}
    </div>
  );
};

export default TripPlanningForm;
