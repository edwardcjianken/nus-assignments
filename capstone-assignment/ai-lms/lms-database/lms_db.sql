-- Table 1: Users
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

-- Table 2: Courses
CREATE TABLE courses (
    course_id INTEGER PRIMARY KEY,
    course_name VARCHAR(100),
    description TEXT
);

-- Table 3: Enrollments
CREATE TABLE enrollments (
    enrollment_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    course_id INTEGER,
    enrollment_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Table 4: Assessments
CREATE TABLE assessments (
    assessment_id INTEGER PRIMARY KEY,
    course_id INTEGER,
    title VARCHAR(100),
    max_score INTEGER,
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Insert Users
INSERT INTO users (name, email, password) 
VALUES 
    ('Alice Johnson', 'alice@example.com', 'alice123'),
    ('Bob Smith', 'bob@example.com', 'bob123'),
    ('Charlie Lee', 'charlie@example.com', 'charlie123');

-- Insert Courses
INSERT INTO courses (course_name, description) 
VALUES 
    ('HTML Basics', 'Introduction to HTML and web structure.'),
    ('CSS Design', 'Learn how to style websites using CSS.'),
    ('MySQL for Beginners', 'Basic concepts of relational databases.');

-- Insert Enrollments
INSERT INTO enrollments (user_id, course_id, enrollment_date) 
VALUES 
    (1, 1, '2024-01-10'),
    (1, 3, '2024-02-05'),
    (2, 2, '2024-02-15'),
    (3, 1, '2024-03-01');

-- Insert Assessments
INSERT INTO assessments (course_id, title, max_score) 
VALUES 
    (1, 'HTML Quiz 1', 100),
    (2, 'CSS Midterm', 80),
    (3, 'MySQL Final Test', 90);
	
CREATE TABLE instructors (
    instructor_id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- Insert some sample instructors
INSERT INTO instructors (name, email) 
VALUES 
    ('John Smith', 'john.smith@lms.com'),
    ('Sarah Johnson', 'sarah.j@lms.com'),
    ('Michael Brown', 'michael.b@lms.com');

-- Add Daniel to users
INSERT INTO users (name, email, password)
VALUES ('Daniel Rose', 'daniel@lms.com', 'daniel123');

-- Enroll Daniel in CSS Design
INSERT INTO enrollments (user_id, course_id, enrollment_date)
SELECT 
    (SELECT user_id FROM users WHERE email = 'daniel@lms.com'),
    (SELECT course_id FROM courses WHERE course_name = 'CSS Design'),
    date('now');

-- Query to show CSS Design enrollments
SELECT 
    u.name,
    u.email,
    c.course_name,
    e.enrollment_date
FROM users u
JOIN enrollments e ON u.user_id = e.user_id
JOIN courses c ON e.course_id = c.course_id
WHERE c.course_name = 'CSS Design';