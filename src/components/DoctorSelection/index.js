import React, { useEffect, useState } from "react";
import "./index.css";

const DoctorSelection = ({ onSelectDoctor }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://babystep-backend-11.onrender.com/doctors");
        if (!response.ok) throw new Error("Failed to fetch doctors");
        const data = await response.json();
        setDoctors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return <div className="loading">Loading doctors...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="doctor-selection">
      <h2>Select a Doctor</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card"
            onClick={() => onSelectDoctor(doctor.id)}
          >
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorSelection;