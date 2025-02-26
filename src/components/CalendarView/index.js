import React, { useState } from "react";
import "./index.css";

const CalendarView = ({ doctorId, onSelectSlot }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAvailableSlots = async (date) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://babystep-backend-11.onrender.com/doctors/${doctorId}/slots?date=${date}`
      );
      if (!response.ok) throw new Error("Failed to fetch slots");
      const data = await response.json();
      setSlots(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    fetchAvailableSlots(date);
  };

  return (
    <div className="calendar-view">
      <h2>Select a Date</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={new Date().toISOString().split("T")[0]} // Restrict to today and future dates
      />
      {loading && <div className="loading">Loading slots...</div>}
      {error && <div className="error">{error}</div>}
      <div className="slots">
        {slots.map((slot, index) => (
          <div
            key={index}
            className="slot"
            onClick={() => onSelectSlot(`${selectedDate}T${slot}`)}
          >
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;