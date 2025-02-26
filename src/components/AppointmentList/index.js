import React from "react";
import "./index.css";

const AppointmentList = ({ appointments, onCancel }) => {
  return (
    <div className="appointment-list">
      <h2>Your Appointments</h2>
      {appointments.map((app) => (
        <div key={app.id} className="appointment-card">
          <h3>{app.patientName}</h3>
          <p>{app.appointmentType}</p>
          <p>{new Date(app.date).toLocaleString()}</p>
          <button onClick={() => onCancel(app.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;