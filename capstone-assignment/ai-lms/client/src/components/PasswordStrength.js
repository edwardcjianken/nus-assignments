import React, { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = () => {
    if (password.length < 6) {
      setStrength("Weak password");
    } else if (password.length >= 6 && /\d/.test(password)) {
      setStrength("Strong password");
    } else {
      setStrength("Add a number to make your password stronger");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Password Strength Checker</h3>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mb-3" onClick={checkStrength}>
        Check Strength
      </button>
      {strength && (
        <p
          className={`alert ${
            strength.includes("Strong") ? "alert-success" : "alert-warning"
          }`}
        >
          {strength}
        </p>
      )}
    </div>
  );
}

export default PasswordStrength;
