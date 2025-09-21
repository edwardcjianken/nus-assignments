import React from "react";
import Login from "./components/Login";
import CourseRecommender from "./components/CourseRecommender";
import "./App.css";

function App() {
  return (
    <div className="container py-4">
      <h1 className="text-center app-header">AI Learning Management System</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="component-container">
            <Login />
          </div>
        </div>
        <div className="col-md-6">
          <div className="component-container">
            <CourseRecommender />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
