import React, { useState, useEffect } from "react";
import DoctorSelection from "./components/DoctorSelection";
import CalendarView from "./components/CalendarView";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import "./App.css";

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments on component mount
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("https://babystep-backend-11.onrender.com/appointments");
        if (!response.ok) throw new Error("Failed to fetch appointments");
        const data = await response.json();
        setAppointments(data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };
    fetchAppointments();
  }, []);

  // Callback to add a new appointment to the list
  const handleBookAppointment = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);

    // Reset the state to show the doctors list again
    setSelectedDoctor(null);
    setSelectedSlot(null);
  };

  // Callback to delete an appointment
  const handleCancelAppointment = async (id) => {
    try {
      const response = await fetch(`https://babystep-backend-11.onrender.com/appointments/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to cancel appointment");
      }

      // Remove the canceled appointment from the state
      setAppointments((prevAppointments) =>
        prevAppointments.filter((app) => app.id !== id)
      );

      alert("Appointment canceled successfully");
    } catch (err) {
      console.error("Error canceling appointment:", err.message);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="app">
      <h1>Doctor Appointment System</h1>
      {!selectedDoctor ? (
        <DoctorSelection onSelectDoctor={setSelectedDoctor} />
      ) : (
        <>
          <CalendarView doctorId={selectedDoctor} onSelectSlot={setSelectedSlot} />
          {selectedSlot && (
            <AppointmentForm
              doctorId={selectedDoctor}
              slot={selectedSlot}
              onBook={handleBookAppointment}
            />
          )}
        </>
      )}
      <AppointmentList
        appointments={appointments}
        onCancel={handleCancelAppointment}
      />
    </div>
  );
};

export default App;