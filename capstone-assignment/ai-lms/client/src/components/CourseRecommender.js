import React, { useState } from "react";

function CourseRecommender() {
  const [interest, setInterest] = useState("");
  const [recommended, setRecommended] = useState("");

  const recommendCourse = () => {
    if (interest.toLowerCase().includes("web")) {
      setRecommended("We recommend: React.js for Beginners");
    } else if (interest.toLowerCase().includes("data")) {
      setRecommended("We recommend: Intro to Data Science with Python");
    } else if (interest.toLowerCase().includes("ai")) {
      setRecommended("We recommend: Machine Learning with Scikit-Learn");
    } else {
      setRecommended("Please enter a valid interest (e.g., AI, Web, Data)");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Course Recommender</h2>
      <input
        type="text"
        placeholder="Enter your interest (e.g., AI, Web, Data)"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <button onClick={recommendCourse}>Get Recommendation</button>
      {recommended && <p style={{ marginTop: "10px" }}>{recommended}</p>}
    </div>
  );
}

export default CourseRecommender;
