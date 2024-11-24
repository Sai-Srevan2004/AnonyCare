import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./TrackMoodPage.css";

// Register required components for ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrackMoodPage = () => {
  const [mood, setMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  const handleMoodSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toLocaleDateString();

    // Check if the current date already exists in the mood history
    if (moodHistory.some((entry) => entry.date === currentDate)) {
      alert("You have already entered your mood for today.");
      return;
    }

    if (!mood) {
      alert("Please enter a mood!");
      return;
    }

    const newMood = {
      mood,
      date: currentDate,
    };

    setMoodHistory([...moodHistory, newMood]);
    setMood("");
  };

  const chartData = {
    labels: moodHistory.map((entry) => entry.date), // Dates for X-axis
    datasets: [
      {
        label: "Mood",
        data: moodHistory.map((entry, index) => index + 1), // Y-axis values (index-based for simplicity)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>

      {/* Input Field */}
      <form onSubmit={handleMoodSubmit} className="mood-form">
        <label htmlFor="mood">Enter Your Mood:</label>
        <input
          type="text"
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="e.g., Happy, Sad, Calm"
        />
        <button type="submit">Track Mood</button>
      </form>

      {/* Mood Visualization */}
      <div className="mood-graph">
        <h3>Mood History</h3>
        {moodHistory.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p>No mood data available yet. Start tracking your mood!</p>
        )}
      </div>
    </div>
  );
};

export default TrackMoodPage;
