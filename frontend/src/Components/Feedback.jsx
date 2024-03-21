import { useState } from "react";
import { FaRegFaceFrown } from "react-icons/fa6";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { FaRegFaceMeh } from "react-icons/fa6";
function Feedback() {
  const [feedbackType, setFeedbackType] = useState("general");
  const [message, setMessage] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [name, setName] = useState("");
  const [satisfaction, setSatisfaction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic goes here
    console.log("Form submitted:", {
      feedbackType,
      message,
      contactInfo,
      name,
      satisfaction,
    });
    // Clear form fields after submission if needed
    setFeedbackType("general");
    setMessage("");
    setContactInfo("");
    setName("");
    setSatisfaction("");
  };

  const handleSatisfaction = (value) => {
    setSatisfaction(value === satisfaction ? "" : value);
  };

  return (
    <div className="bg-white overflow-auto shadow-lg border border-slate-300  text-black  flex justify-between  rounded-md m-2 p-4 ">
      <div className="flex flex-col gap-2 p-2 m-2 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <label htmlFor="feedback-type" className="block mb-2">
            Feedback Type
          </label>
          <select
            id="feedback-type"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            className="block w-full p-2 mb-4 border border-gray-300 rounded">
            <option value="general">General Feedback</option>
            <option value="bug">Bug Report</option>
            <option value="feature-request">Feature Request</option>
            {/* Add more options as needed */}
          </select>

          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full p-2 mb-4 border border-gray-300 rounded"></textarea>

          <label htmlFor="contact-info" className="block mb-2">
            Contact Information (Optional)
          </label>
          <input
            type="text"
            id="contact-info"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          {/* Satisfaction buttons */}
          <span className="font-bold text-gray">
            Overall, how satisfied are you with the experience?
          </span>

          <div className="flex justify-center items-center m-3 ">
            <div className="flex justify-center space-x-8">
              <div className="flex flex-col justify-center items-center gap-2  w-full ">
                <FaRegFaceLaughBeam
                  onClick={() => handleSatisfaction("Excellent")}
                  className={`text-3xl p-0.2 hover:text-green-700 icon ${
                    satisfaction === "Excellent"
                      ? "text-green-700"
                      : "text-gray-400"
                  }`}
                />
                <span className="text-sm text-gray-500 font-light">
                  Excellent
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2  w-full ">
                <FaRegFaceSmile
                  onClick={() => handleSatisfaction("happy")}
                  className={`text-3xl p-0.2 hover:text-green-400 icon ${
                    satisfaction === "happy"
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                />
                <span className="text-sm text-gray-500 font-light">Happy</span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2  w-full ">
                <FaRegFaceMeh
                  onClick={() => handleSatisfaction("neutral")}
                  className={`text-3xl p-0.2 hover:text-yellow-300 icon ${
                    satisfaction === "neutral"
                      ? "text-yellow-300"
                      : "text-gray-400"
                  }`}
                />
                <span className="text-sm text-gray-500 font-light">
                  Neutral
                </span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2  w-full ">
                <FaRegFaceFrown
                  onClick={() => handleSatisfaction("unhappy")}
                  className={`text-3xl p-0.2 hover:text-yellow-500
                            icon ${
                              satisfaction === "unhappy"
                                ? "text-yellow-500"
                                : "text-gray-400"
                            }`}
                />
                <span className="text-sm text-gray-500 font-light">
                  Unhappy
                </span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2  w-full ">
                <FaRegFaceSadTear
                  onClick={() => handleSatisfaction("poor")}
                  className={`text-3xl p-0.2 hover:text-red-500
                            icon ${
                              satisfaction === "poor"
                                ? "text-red-500"
                                : "text-gray-400"
                            }`}
                />
                <span className="text-sm text-gray-500 font-light">Poor</span>
              </div>
            </div>
          </div>
          <div className="flex items-center m-2 gap-2 mb-6">
            <input
              type="checkbox"
              id="consent"
              className="peer h-5 w-5 rounded-sm border-gray-300 focus:ring-primary focus:ring-offset-background"
            />
            <label htmlFor="consent" className="ml-2  text-sm">
              I consent to the storage and handling of my data by this website.
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
