import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function FlightPricePredictor() {
  const [formData, setFormData] = useState({
    airline: '',
    source_city: '',
    departure_time: '',
    stops: '',
    arrival_time: '',
    destination_city: '',
    flying_class: '',
    departure_date: '',
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://flight-price-server.onrender.com/predict', formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  useEffect(() => {
    if (prediction !== null) {
      document.body.style.overflow = 'hidden';  // Prevent scroll
    } else {
      document.body.style.overflow = 'auto';    // Restore scroll
    }

    // Cleanup in case of component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [prediction]);

  return (
    <div className="bg min-h-screen bg-gray-100 flex flex-col items-center py-10 px-10 max-sm:px-5">
      
      <h1 className="max-sm:text-4xl text-5xl bg-red-200 py-3 px-2 rounded-lg text-center max-sm:font-semibold font-bold text-red-600 mb-8">Flight Price Prediction</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl space-y-6">
        
        {/* Airline Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Airline</label>
          <select
            name="airline"
            value={formData.airline}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Airline</option>
            <option value="SpiceJet">SpiceJet</option>
            <option value="AirAsia">AirAsia</option>
            <option value="Vistara">Vistara</option>
            <option value="GO_FIRST">GO_FIRST</option>
            <option value="Indigo">Indigo</option>
            <option value="Air_India">Air India</option>
          </select>
        </div>

        {/* Source City Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Source City</label>
          <select
            name="source_city"
            value={formData.source_city}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Source City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Departure Time Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Departure Time</label>
          <select
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Departure Time</option>
            <option value="Evening">Evening</option>
            <option value="Early_Morning">Early Morning</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Late_Night">Late Night</option>
          </select>
        </div>

        {/* Stops Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Stops</label>
          <select
            name="stops"
            value={formData.stops}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Stops</option>
            <option value="zero">Zero</option>
            <option value="one">One</option>
            <option value="two_or_more">Two or More</option>
          </select>
        </div>

        {/* Arrival Time Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Arrival Time</label>
          <select
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Arrival Time</option>
            <option value="Night">Night</option>
            <option value="Morning">Morning</option>
            <option value="Early_Morning">Early Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Late_Night">Late Night</option>
          </select>
        </div>

        {/* Destination City Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Destination City</label>
          <select
            name="destination_city"
            value={formData.destination_city}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Destination City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>

        {/* Class Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Class</label>
          <select
            name="flying_class"
            value={formData.flying_class}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Class</option>
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
          </select>
        </div>

        {/* Departure Date Field */}
        <div className="space-y-2 w-full">
          <label className="block text-lg font-medium text-yellow-500">Departure Date</label>
          <input
            type="date"
            name="departure_date"
            min={new Date().toISOString().split('T')[0]}
            value={formData.departure_date}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-500 transition duration-300 cursor-pointer"
        >
          Predict
        </button>
      </form>

      {prediction !== null && (
  <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white border border-amber-700 rounded-2xl shadow-lg p-8 w-[40%] max-sm:w-[70%] max-w-2xl h-[40vh] max-sm:h-[36vh] flex flex-col justify-center items-center text-center relative">
      <h2 className="text-4xl max-sm:text-3xl font-bold text-red-600 mb-6 max-sm:mb-3">
        Predicted Flight Price
      </h2>
      <p className="text-4xl max-sm:text-3xl font-extrabold text-green-600 mb-10 mt-5 max-sm:mt-6 max-sm:mb-8">
        ₹{prediction}
      </p>

      <button
        onClick={() => setPrediction(null)}
        className="cursor-pointer text-yellow-500 hover:bg-red-500 text-white font-semibold px-8 max-sm:px-2 max-sm:py-1 py-3 rounded-lg transition-all duration-300 shadow-lg text-lg"
      >
        Predict Another
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default FlightPricePredictor;