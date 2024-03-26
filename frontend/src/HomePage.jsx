import React, { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className="h-96 bg-blue-200">Home Page</div>
    </>
  );
};

export default HomePage;
