import "./Profile.css";
import React, { useState } from "react";
import defaultProfileImg from "./profile.jpg"; // Adjust the path as necessary
import { v4 as uuidv4 } from "uuid"; // Use UUID to generate unique ids for keys
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaPlusCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const DoctorInfoForm = () => {
  // States for each input field
  const [doctorId] = useState(`DR-${Math.floor(Math.random() * 1000000)}`);
  const [nickName, setNickName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle the form submission here, for example, send to a server
    console.log("Form Submitted!", {
      firstName,
      lastName,
      nickName,
      selectedHospital,
    });
    alert(`Form Submitted for ${firstName} ${lastName}`);
  };

  const [education, setEducation] = useState([
    { id: uuidv4(), degree: "", college: "", yearOfCompletion: "" },
  ]);

  const handleEducationChange = (id, event) => {
    const newEducation = education.map((edu) => {
      if (edu.id === id) {
        return { ...edu, [event.target.name]: event.target.value };
      }
      return edu;
    });
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation(
      education.concat({
        id: uuidv4(),
        degree: "",
        college: "",
        yearOfCompletion: "",
      })
    );
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const [experiences, setExperiences] = useState([
    { id: uuidv4(), hospitalName: "", from: "", to: "", designation: "" },
  ]);

  const handleExperienceChange = (id, event) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [event.target.name]: event.target.value };
      }
      return experience;
    });
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences(
      experiences.concat({
        id: uuidv4(),
        hospitalName: "",
        from: "",
        to: "",
        designation: "",
      })
    );
  };
  return (
    <div className="bg-white  shadow-lg border border-slate-300  text-black     rounded-md  p-4   m-2">
      {/* Basic Info Section */}

      {/* <div className="form-title">Basic Information</div> */}
      <div className="section">
        <form id="infoForm" onSubmit={handleSubmit}>
          <div className="photo-upload">
            <div className="image-container">
              <img
                src={profilePhoto || defaultProfileImg}
                alt="Profile"
                className="profile-photo-preview"
              />
            </div>
            <div className="upload-btn-wrapper">
              <button className="btn-upload">Upload Photo</button>
              <input
                type="file"
                id="photoUpload"
                accept="image/png, image/jpeg, image/gif,image/heic"
                onChange={handleFileChange}
              />
              <p className="file-types">Allowed JPG, GIF or PNG.</p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="hospitalSelect">Hospital</label>
            <select
              id="hospitalSelect"
              value={selectedHospital}
              onChange={(e) => setSelectedHospital(e.target.value)}>
              <option value="">Select Hospital</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="doctorId">Doctor Id</label>
              <input type="text" id="doctorId" value={doctorId} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="nickName">Nick Name</label>
              <input
                type="text"
                id="nickName"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
          </div>
          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="mobileNo">Mobile No</label>
              <input
                type="tel"
                id="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="genderSelect">Gender</label>
              <select
                id="genderSelect"
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="dob">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="form-title">Contact Details</div>
      <div className="section">
        <form>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}>
                {/* Populate with countries */}
                <option value="India">India</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="stateProvince">State / Province</label>
              <input
                type="text"
                id="stateProvince"
                value={stateProvince}
                onChange={(e) => setStateProvince(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      {/* About Me Section */}
      <div className="form-title">About Me</div>
      <div className="section">
        <div className="form-group">
          <label htmlFor="biography">Biography</label>
          <textarea
            id="biography"
            placeholder="Specialist in Cardiology"
            defaultValue={""}
          />
        </div>
      </div>

      {/* Eductaion details */}
      <div className="form-title">Education Details</div>
      {education.map((edu, index) => (
        <div className="section" key={edu.id}>
          <div className="inline-group">
            <div className="form-group">
              <label htmlFor={`degree-${edu.id}`}>Degree</label>
              <input
                type="text"
                id={`degree-${edu.id}`}
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(edu.id, e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`yearOfCompletion-${edu.id}`}>
                Year of Completion
              </label>
              <input
                type="text"
                id={`yearOfCompletion-${edu.id}`}
                name="yearOfCompletion"
                value={edu.yearOfCompletion}
                onChange={(e) => handleEducationChange(edu.id, e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor={`college-${edu.id}`}>College/Institute</label>
              <input
                type="text"
                id={`college-${edu.id}`}
                name="college"
                value={edu.college}
                onChange={(e) => handleEducationChange(edu.id, e)}
              />
            </div>
          </div>
          {education.length > 1 && (
            <button type="button" onClick={() => deleteEducation(edu.id)}>
              Delete
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add More
      </button>

      {/* Clinic Info Section */}
      <div className="form-title">Clinic Info</div>

      <div className="section">
        <div className="form-group">
          <label htmlFor="clinicName">Clinic Name</label>
          <input type="text" id="clinicName" placeholder="Enter Clinic Name" />
        </div>
        <div className="form-group">
          <label htmlFor="clinicAddress">Clinic Address</label>
          <input
            type="text"
            id="clinicAddress"
            placeholder="Address of Clinic "
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="form-title">Experience</div>
      {experiences.map((experience, index) => (
        <div className="experience-section" key={experience.id}>
          <div className="section">
            <div className="form-group">
              <label htmlFor={`hospitalName-${experience.id}`}>
                Hospital Name
              </label>
              <input
                type="text"
                id={`hospitalName-${experience.id}`}
                name="hospitalName"
                value={experience.hospitalName}
                onChange={(e) => handleExperienceChange(experience.id, e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`from-${experience.id}`}>From</label>
              <input
                type="date"
                id={`from-${experience.id}`}
                name="from"
                value={experience.from}
                onChange={(e) => handleExperienceChange(experience.id, e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`to-${experience.id}`}>To</label>
              <input
                type="date"
                id={`to-${experience.id}`}
                name="to"
                value={experience.to}
                onChange={(e) => handleExperienceChange(experience.id, e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`designation-${experience.id}`}>
                Designation
              </label>
              <input
                type="text"
                id={`designation-${experience.id}`}
                name="designation"
                value={experience.designation}
                onChange={(e) => handleExperienceChange(experience.id, e)}
              />
            </div>
          </div>
          {index > 0 && (
            <div
              className="delete-experience-btn"
              onClick={() => deleteExperience(experience.id)}>
              {/* <FontAwesomeIcon icon={faTrash} /> */}
              <FaTrash />
              Delete
            </div>
          )}
        </div>
      ))}
      <div className="add-more-icon" onClick={() => addExperience()}>
        {/* <FontAwesomeIcon icon={faPlusCircle} /> Add more */}
        <FaPlusCircle />
      </div>

      {/* Doctor Document Verification Section */}
      <div className="form-title">Doctor Document Verification</div>
      <div className="document-verification">
        <div className="section">
          <div className="form-group">
            <label htmlFor="medicalLicenseNumber">Medical License Number</label>
            <input
              type="text"
              id="medicalLicenseNumber"
              placeholder="Enter Medical License Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="licenseExpiryDate">License Expiry Date</label>
            <input type="date" id="licenseExpiryDate" />
          </div>
          <div className="form-group">
            <label htmlFor="certifications">Certifications</label>
            <textarea
              id="certifications"
              placeholder="List any certifications held by the doctor"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="documentUpload">Upload Document</label>
            <input
              type="file"
              id="documentUpload"
              accept=".pdf,.doc,.docx,.txt"
            />
            <p className="file-types">
              Allowed file types: PDF, DOC, DOCX, TXT
            </p>
          </div>
          {/* Add more fields for additional document verification as needed */}
        </div>
      </div>

      <button type="submit">Save </button>
    </div>
  );
};

export default DoctorInfoForm;
