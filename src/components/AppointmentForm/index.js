import React, { useState } from "react";
import "./index.css";

const AppointmentForm = ({ doctorId, slot, onBook }) => {
  const [patientName, setPatientName] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      doctorId,
      date: slot,
      duration: 30,
      appointmentType,
      patientName,
      notes,
    };

    try {
      const response = await fetch("https://babystep-backend-11.onrender.com/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to book appointment");
      }

      const data = await response.json();
      console.log("Appointment booked successfully:", data);

      // Call the onBook callback with the new appointment
      onBook(data);

      // Reset the form
      setPatientName("");
      setAppointmentType("");
      setNotes("");
    } catch (err) {
      console.error("Error booking appointment:", err.message);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Appointment Type"
        value={appointmentType}
        onChange={(e) => setAppointmentType(e.target.value)}
        required
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;