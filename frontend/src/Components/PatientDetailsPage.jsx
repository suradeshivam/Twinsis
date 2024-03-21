import "./PatientDetailsPage.css";
const PatientDetailsPage = () => {
  // Functions to handle downloads
  const showPrescription = () => {
    // Your existing logic
    const prescriptionText = `
      Patient Name: Jane Doe
      Prescription Date: 2024-03-19
      Medication: Amoxicillin 500mg
      Dosage: Take 1 tablet 3 times a day for 7 days
      Notes: Take with food to reduce stomach upset.
    `;
    const blob = new Blob([prescriptionText], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "JaneDoe_Prescription_2024-03-19.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadReport = () => {
    // Your existing logic
    const reportText = `
      Patient Name: Jane Doe
      Visit Date: 2024-03-19
      Summary: Annual physical examination results - All parameters within normal range.
      Recommendations: Continue current diet and exercise regimen. Next appointment scheduled for 2025-03-19.
    `;
    const blob = new Blob([reportText], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = "JaneDoe_Report_2024-03-19.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white shadow h-screen text-black  flex justify-between  rounded-md m-2 p-4 ">
      {/* Left Side: Smaller Card and Photo */}
      <div className="w-full md:w-1/4 flex flex-col items-center p-2">
        <div className="bg-white rounded-lg p-3 shadow mb-4">
          <div className="image overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://img.freepik.com/free-photo/horizontal-shot-stunned-impressed-woman-reacts-something-awesome-place-your-promo_273609-56725.jpg"
              alt="Patient Photo"
            />
          </div>
          <h1 className="text-gray-900 font-bold text-xl my-1">Jane Doe</h1>
          <h3 className="text-gray-600 text-semibold">Status: Active</h3>
          <ul className="text-gray-600 divide-y divide-gray-200 mt-3">
            <li className="py-2">Ethnicity: Caucasian</li>
            <li className="py-2">Language Preference: English</li>
            <li className="py-2">Blood Type: A+</li>
          </ul>
        </div>
        <button
          onClick={showPrescription}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-2 w-full">
          Download Prescription
        </button>
        <button
          onClick={downloadReport}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full">
          Download Reports
        </button>
      </div>

      {/* Right Side: Patient Details Information */}
      <div className="w-full md:w-3/4 p-2">
        <div className="bg-white rounded-lg p-5 shadow overflow-auto h-full custom-scrollbar">
          <div className="mb-6">
            {/* Contact Information */}

            {/* Repeat for Medical, Insurance, and Additional Information */}
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Contact Information
            </h3>
            <div className="ml-4">
              <div className="detail-point mb-2">
                <span className="detail-label">Phone Number:</span>
                <span>555-123-4567</span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Email:</span>
                <span>jane.doe@example.com</span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Address:</span>
                <span>123 Main St, Anytown, Anystate, 12345</span>
              </div>
            </div>
            {/* Replace with actual detail points */}
          </div>
          <div className="mb-6">
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Medical Information
            </h3>
            {/* Medical details */}
            <div className="ml-4">
              <div className="detail-point mb-2">
                <span className="detail-label">Advanced Care Plan:</span>
                <span>
                  DNR order on file, prefers no extraordinary life-saving
                  measures.
                </span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Past Medical History:</span>
                <span>
                  History of asthma and seasonal allergies. No prior surgeries.
                  Hospitalized once for pneumonia in 2010.
                </span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Medication History:</span>
                <span>
                  Currently taking Ventolin as needed for asthma. No known drug
                  allergies.
                </span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Known Drug Allergies:</span>
                <span>None</span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Family Medical History:</span>
                <span>
                  Mother has hypertension. Father had type 2 diabetes. No known
                  genetic disorders.
                </span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Insurance Information
            </h3>
            {/* Insurance details */}
            <div className="ml-4">
              <div className="detail-point mb-2">
                <span className="detail-label">Provider:</span>
                <span>Generic Health Insurance</span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Policy Number:</span>
                <span>123456789</span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Coverage Details:</span>
                <span>
                  Full coverage includes general consultation, emergency
                  services, and up to 80% cost coverage for prescribed
                  medications and selected surgical procedures.
                </span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-gray-900 font-bold text-xl mb-2">
              Additional Information
            </h3>
            {/* Additional details */}
            <div className="ml-4">
              <div className="detail-point mb-2">
                <span className="detail-label">Social History:</span>
                <span>
                  Non-smoker. Occasional alcohol consumption. Regular exercise 3
                  times a week.
                </span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Vaccination History:</span>
                <span>
                  Up-to-date on all recommended vaccinations, including annual
                  flu shots and COVID-19 vaccination series.
                </span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Advanced Directives:</span>
                <span>Has a living will. No DNR order on file.</span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Consent Forms:</span>
                <span>
                  Consent for treatment and vaccinations signed and filed.
                </span>
              </div>
              <div className="detail-point mb-2">
                <span className="detail-label">Billing Information:</span>
                <span>
                  Annual exam and flu shot covered by insurance. No co-pay
                  required.
                </span>
              </div>
            </div>
          </div>

          {/* ... Other sections ... */}
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPage;
