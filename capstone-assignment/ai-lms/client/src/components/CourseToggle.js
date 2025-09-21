import React, { useState } from "react";

function CourseToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mt-4">
      <h3>React Fundamentals Course</h3>
      <button
        className={`btn ${isVisible ? "btn-danger" : "btn-primary"} mb-3`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Description" : "Show Description"}
      </button>

      {isVisible && (
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              This course covers React fundamentals including components, JSX,
              and props.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseToggle;
