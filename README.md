# Doctor Appointment System

A full-stack web application for managing doctor appointments. Users can select a doctor, view available time slots, book appointments, and manage their appointments.

---

## Features
1. **Doctor Selection**:
   - View a list of doctors and select one.
2. **Calendar/Slot View**:
   - Choose a date and view available time slots for the selected doctor.
3. **Appointment Booking**:
   - Book an appointment by filling out a form with patient details.
4. **Appointment Management**:
   - View a list of upcoming appointments.
   - Cancel an appointment.

---

## Technologies Used
- **Frontend**:
  - React.js
  - HTML, CSS (Modern and Responsive Design)
- **Backend**:
  - Node.js
  - Express.js
  - SQLite (Database)
- **Other Tools**:
  - Moment.js (Date and Time Handling)
  - Fetch API (HTTP Requests)

---

## Setup Instructions
 ### 2. Backend Setup
   1. Navigate to the backend directory:
        ```bash
           cd backend
        ```
  2. Install dependencies::
        ```bash
           npm install
        ```   
  3. Start the backend server::
        ```bash
           node server.js
        ```     
        The backend will run on http://localhost:5000.

 ### 2. Frontend Setup
   1. Navigate to the Frontend  directory:
        ```bash
           cd Frontend 
        ```
  2. Install dependencies::
        ```bash
           npm install
        ```   
  3. Start the Frontend server::
        ```bash
           npm start
        ```     
        The backend will run on http://localhost:3000.

---

## Steps to Book and Manage Appointments

1. **Select a Doctor:**
   - On the homepage, select a doctor from the list.

2. **Choose a Date and Time Slot:**
   - After selecting a doctor, choose a date and view available time slots.

3. **Book an Appointment:**
   - Click on an available time slot and fill out the appointment form.

4. **Manage Appointments:**
   - View your upcoming appointments on the appointments list.
   - Cancel an appointment by clicking the **Cancel** button.
     

## Project Structure
   ```bash
      doctor-appointment-system/
      ├── backend/
      │   ├── server.js           # Backend server code
      │   ├── appointments.db     # SQLite database file
      ├── frontend/
      │   ├── public/             # Static assets
      │   ├── src/
      │   │   ├── components/     # React components
      │   │   │   ├── DoctorSelection/
      │   │   │   │   ├── index.js
      │   │   │   │   ├── index.css
      │   │   │   ├── CalendarView/
      │   │   │   │   ├── index.js
      │   │   │   │   ├── index.css
      │   │   │   ├── AppointmentForm/
      │   │   │   │   ├── index.js
      │   │   │   │   ├── index.css
      │   │   │   ├── AppointmentList/
      │   │   │   │   ├── index.js
      │   │   │   │   ├── index.css
      │   │   ├── App.js          # Main application component
      │   │   ├── App.css         # Global styles
      │   │   ├── index.js        # Entry point
      ├── README.md               # Project documentation
   ``` 

## API Endpoints

### Doctors

- **GET `/doctors`**:  
  Fetch all doctors.

- **GET `/doctors/:id/slots`**:  
  Fetch available time slots for a doctor on a given date.

### Appointments

- **GET `/appointments`**:  
  Fetch all appointments.

- **POST `/appointments`**:  
  Book a new appointment.

- **DELETE `/appointments/:id`**:  
  Cancel an appointment.
