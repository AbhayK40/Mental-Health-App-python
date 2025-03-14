import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AnxietyView = () => {
    const [selectedOption, setSelectedOption] = useState("Select an option");

    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-xl font-bold">Why are you feeling anxious today?</h1>
            <select className="border p-2 mt-4" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Select an option">Select an option</option>
                <option value="Breathing Exercises">Breathing Exercises</option>
                <option value="Useful Resources">Useful Resources</option>
            </select>
            {selectedOption === "Useful Resources" && (
                <p className="mt-4">Here are some useful resources...</p>
            )}
            {selectedOption === "Breathing Exercises" && (
                <Link to="/breathing-exercises" className="block mt-4 text-blue-500">Go to Breathing Exercises</Link>
            )}
            <Link to="/chat" className="block mt-6 text-lg font-bold underline">Talk to someone? Click here</Link>
        </div>
    );
};

const AngryView = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-xl font-bold">Why are you feeling mad today?</h1>
            <Link to="/chat" className="block mt-6 text-lg font-bold underline">Talk to someone? Click here</Link>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AnxietyView />} />
                <Route path="/angry" element={<AngryView />} />
                <Route path="/chat" element={<ChatBot />} />
            </Routes>
        </Router>
    );
};

export default App;
