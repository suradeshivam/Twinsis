// DocHistory.js

import { useNavigate } from "react-router-dom";

const DocHistory = () => {
  const navigate = useNavigate();

  // Example patient data, replace with real data as needed
  const patients = [
    {
      id: "001",
      name: "John Doe",
      age: 34,
      sex: "Male",
      appointmentDate: "2024-03-19",
      disease: "Flu",
    },
    {
      id: "002",
      name: "John Doe",
      age: 34,
      sex: "Male",
      appointmentDate: "2024-03-19",
      disease: "Flu",
    },
    {
      id: "003",
      name: "John Doe",
      age: 34,
      sex: "Male",
      appointmentDate: "2024-03-19",
      disease: "Flu",
    },
    {
      id: "004",
      name: "John Doe",
      age: 34,
      sex: "Male",
      appointmentDate: "2024-03-19",
      disease: "Flu",
    },
    {
      id: "005",
      name: "John Doe",
      age: 34,
      sex: "Male",
      appointmentDate: "2024-03-19",
      disease: "Flu",
    },
    {
      id: "006",
      name: "John Doe",
      age: 34,
      sex: "Male",
      appointmentDate: "2024-03-19",
      disease: "Flu",
    },
    // Add more patient objects here...
  ];
  const openPatientDetails = (patientId) => {
    navigate(`/doctor/history/patient-details/${patientId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Patient History
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between mb-5 items-center">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500 pl-10"
            type="text"
            placeholder="Search patient by name or ID..."
          />
          <button className="absolute inset-y-0 right-0 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-r-lg">
            Search
          </button>
        </div>
        {/* Search Input */}
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Sort by Date</option>
            <option value="today">Today</option>
            <option value="lastWeek">Last 1 Week</option>
            <option value="lastMonth">Last 1 Month</option>
            <option value="lastYear">Last 1 Year</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
            </svg>
          </div>
        </div>
        {/* Sort Dropdown */}
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
        <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
          <thead>
            <tr className="text-left">
              <th className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">
                Patient ID
              </th>
              <th className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">
                {" "}
                Name
              </th>
              <th className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">
                {" "}
                Age
              </th>
              <th className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">
                {" "}
                Sex
              </th>
              <th className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">
                {" "}
                Appointment
              </th>
              <th className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-600 font-bold tracking-wider uppercase text-xs">
                {" "}
                Disease
              </th>
              {/* Add other headers */}
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="cursor-pointer"
                onClick={() => openPatientDetails(patient.id)}
                style={{ cursor: "pointer" }}>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-900">
                  {patient.id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-900">
                  {patient.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-900">
                  {patient.age}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-900">
                  {patient.sex}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-900">
                  {patient.appointmentDate}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-900">
                  {patient.disease}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocHistory;
