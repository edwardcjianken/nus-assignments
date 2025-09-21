// Import the express module
const express = require("express");

// Create an Express application
const app = express();

// Define the port number to run the server on
const PORT = 5000;

// 1. Middleware to parse JSON bodies in requests
app.use(express.json());

// 2. Basic GET route for homepage
app.get("/", (req, res) => {
  res.send("Welcome to the LMS backend!");
});
// 3. GET route to return a sample list of courses
app.get("/courses", (req, res) => {
  const courses = [
    { id: 1, name: "React for Beginners" },
    { id: 2, name: "Intro to Data Science" },
    { id: 3, name: "AI Fundamentals" },
  ];
  res.json(courses); // Send the array as JSON
});

// 4. POST route to handle course enrollment
app.post("/enroll", (req, res) => {
  const { userId, courseId } = req.body;

  // Check for missing required fields
  if (!userId || !courseId) {
    return res.status(400).json({
      error: "Missing userId or courseId in request",
    });
  }

  // If all required fields are present, process the enrollment
  res.json({
    message: `User ${userId} successfully enrolled in course ${courseId}`,
    success: true,
    enrollment: {
      userId,
      courseId,
      enrolledAt: new Date().toISOString(),
    },
  });
});

// 5. Start the Express server and listen on PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
