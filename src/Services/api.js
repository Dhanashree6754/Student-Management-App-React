const API_URL = 'http://localhost:5000';

// Register Students
export const registerStudent = async (userData) => {
  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// Login Student
export const loginStudent = async (email, password) => {
  const res = await fetch(`${API_URL}/students`);
  const users = await res.json();
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = JSON.stringify({ name: user.name, email: user.email });
    localStorage.setItem("token", token);
    return { success: true, token };
  } else {
    return { success: false };
  }
};

// Fetch Students
export const fetchStudents = async () => {
  try {
    const response = await fetch(`${API_URL}/students`);
    if (!response.ok) throw new Error("Failed to fetch students.");
    const data = await response.json();
    console.log("Fetched Students:", data);
    return data;
  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
};

// Add Student
export const addStudent = async (student) => {
  const res = await fetch(`${API_URL}/students`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  return res.json();
};

// Delete Student
export const deleteStudent = async (id) => {
  await fetch(`${API_URL}/students/${id}`, {
    method: "DELETE"
  });
};

// Update Student
export const updateStudent = async (id, updatedData) => {
  await fetch(`${API_URL}/students/${id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  });
};
