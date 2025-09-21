const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory students array
let students = [
  {
    id: 1,
    name: "Edward",
    email: "edward@email.com",
    program: "Business program",
  },
  {
    id: 2,
    name: "John",
    email: "john@email.com",
    program: "Science program",
  },
  {
    id: 3,
    name: "Lily",
    email: "lily@email.com",
    program: "Arts program",
  },
];

app.get("/", (req, res) => {
  res.send("Server is online.");
});

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET a specific student
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.json(student);
});

// POST or add new student
app.post("/students", (req, res) => {
  const { id, name, email, program } = req.body;
  if (
    typeof id !== "number" ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof program !== "string"
  ) {
    return res.status(400).json({ error: "Invalid or missing student data" });
  }
  // Check for duplicate ID
  if (students.some((s) => s.id === id)) {
    return res
      .status(400)
      .json({ error: "Student with this ID already exists" });
  }
  const newStudent = { id, name, email, program };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT or update a specific existing student
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, email, program } = req.body;
  const studentIndex = students.findIndex((s) => s.id === id);
  if (studentIndex === -1) {
    return res.status(404).json({ error: "Student not found" });
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof program !== "string"
  ) {
    return res.status(400).json({ error: "Invalid or missing student data" });
  }
  students[studentIndex] = { id, name, email, program };
  res.json(students[studentIndex]);
});

// DELETE a student
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const studentIndex = students.findIndex((s) => s.id === id);
  if (studentIndex === -1) {
    return res.status(404).json({ error: "Student not found" });
  }
  students.splice(studentIndex, 1);
  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
