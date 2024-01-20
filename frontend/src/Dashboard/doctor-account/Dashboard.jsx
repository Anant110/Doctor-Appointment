import React, { useState } from 'react';

const App = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'John Doe', time: '10:00 AM' },
    { id: 2, patient: 'Jane Smith', time: '11:30 AM' },
    // Add more appointment data as needed
  ]);

  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    // Add more patient data as needed
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto bg-white rounded shadow p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Doctor's Dashboard</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Appointments</h2>
          <ul>
            {appointments.map(appointment => (
              <li
                key={appointment.id}
                className="bg-blue-100 p-4 mb-2 rounded-md shadow-md hover:bg-blue-200 transition duration-300"
              >
                {appointment.patient} - {appointment.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Patients List</h2>
          <ul>
            {patients.map(patient => (
              <li
                key={patient.id}
                className="bg-green-100 p-4 mb-2 rounded-md shadow-md hover:bg-green-200 transition duration-300"
              >
                {patient.name} - {patient.age} years old
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

