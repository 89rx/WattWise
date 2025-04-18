import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Dashboard = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedHostel, setSelectedHostel] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [energyData, setEnergyData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  //dummy data
  const areas = ["North Campus", "South Campus", "Academic Area"];
  const hostels = {
    "North Campus": ["Hostel A", "Hostel B", "Hostel C"],
    "South Campus": ["Hostel D", "Hostel E", "Hostel F"],
    "Academic Area": ["Library", "Lecture Hall", "Lab Complex"],
  };
  const places = ["Main Building", "Common Area", "Dining Hall"];

  const fetchEnergyData = () => {
    const mockData = {
      area: selectedArea,
      building: selectedHostel || selectedPlace,
      currentConsumption: "1250 kWh",
      dailyAverage: "980 kWh",
      monthlyTrend: "12% increase",
      efficiencyScore: "78/100",
      recommendations: [
        "Turn off unused lights in common areas",
        "Schedule AC usage during non-peak hours",
        "Consider solar panel installation"
      ]
    };
    setEnergyData(mockData);
    setShowPopup(true);
  };

  return (
    <>
      <Helmet>
        <title>Wattwise | Dashboard</title>
      </Helmet>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center pt-16 pb-8" // Added pt-16 to account for navbar height
        style={{ backgroundImage: "url('/wattbg.jpg')" }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Energy Consumption Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-[#0b1a3f] mb-4">Select Area</h2>
              <select
                value={selectedArea}
                onChange={(e) => {
                  setSelectedArea(e.target.value);
                  setSelectedHostel("");
                  setSelectedPlace("");
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select an area</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
            
           
            {selectedArea && (
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-[#0b1a3f] mb-4">
                  {selectedArea.includes("Hostel") ? "Select Hostel" : "Select Building"}
                </h2>
                <select
                  value={selectedHostel}
                  onChange={(e) => setSelectedHostel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select an option</option>
                  {hostels[selectedArea]?.map((hostel) => (
                    <option key={hostel} value={hostel}>
                      {hostel}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            
            {selectedArea && (
              <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-[#0b1a3f] mb-4">Select Specific Place</h2>
                <select
                  value={selectedPlace}
                  onChange={(e) => setSelectedPlace(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select a place</option>
                  {places.map((place) => (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          
          {(selectedHostel || selectedPlace) && (
            <div className="flex justify-center mt-8 w-full">
              <button
                onClick={fetchEnergyData}
                className="bg-[#0b1a3f] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#9288f8] transition-colors"
              >
                Get Energy Data
              </button>
            </div>
          )}
        </div>
        
        
        {showPopup && energyData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#0b1a3f]">
                  Energy Report for {energyData.building}
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0b1a3f]">Current Consumption</h3>
                  <p className="text-xl">{energyData.currentConsumption}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0b1a3f]">Daily Average</h3>
                  <p className="text-xl">{energyData.dailyAverage}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0b1a3f]">Monthly Trend</h3>
                  <p className="text-xl">{energyData.monthlyTrend}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-[#0b1a3f]">Efficiency Score</h3>
                  <p className="text-xl">{energyData.efficiencyScore}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#0b1a3f] mb-2">Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {energyData.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-[#0b1a3f] text-white px-4 py-2 rounded-md hover:bg-[#9288f8]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;