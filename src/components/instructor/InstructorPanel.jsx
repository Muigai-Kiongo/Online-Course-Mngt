import React, { useState } from "react";
import Search from "../Search";

function InstructorPanel({ courses, setCourses, searchTerm, setSearchTerm}) {
  const [currentCourse, setCurrentCourse] = useState({ title: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentCourse((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = () => {
  if (!currentCourse.title) return alert("Title is required");

  if (editingId !== null) {
    // Update existing course
    setCourses(
      courses.map((c) =>
        c.id === editingId ? { ...c, ...currentCourse } : c
      )
    );
    setEditingId(null);
  } else {
    setCourses([...courses, { id: Date.now(), ...currentCourse }]);
  }
  setCurrentCourse({ title: "", description: "" });
};


  const handleEdit = (id) => {
    const courseToEdit = courses.find((c) => c.id === id);
    setCurrentCourse(courseToEdit);
    setEditingId(id);
  };

  return (
    <div>
      <h2>Instructor Courses</h2>
    <div className="search-bar">
      <button className="mr-4 ml-4 border-1">Instructor1</button>
      <button>Instructor2</button>
      <button>Instructor3</button>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    </div>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.title}</strong>: {course.description}
            <button onClick={() => handleEdit(course.id)}>Edit</button>
          </li>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={currentCourse.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Course Description"
          value={currentCourse.description}
          onChange={handleChange}
        />
        <button type="submit">{editingId ? "Update" : "Add"} Course</button>
      </form>
    </div>
  );
}

export default InstructorPanel;
