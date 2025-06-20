import React, { useState, useMemo } from "react";
import Search from "../Search";
import InstructorFilter from "./InstructorFilter"; // Renamed for clarity

function InstructorPanel({ courses, setCourses }) {
  const [currentCourse, setCurrentCourse] = useState({
    title: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");

  const instructors = useMemo(() => {
    const uniqueInstructors = new Set();
    courses.forEach((c) => uniqueInstructors.add(c.instructor));
    return Array.from(uniqueInstructors).sort();
  }, [courses]);

  const filteredCourses = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term);

      const matchesInstructor = selectedInstructor
        ? course.instructor === selectedInstructor
        : true;

      return matchesSearch && matchesInstructor;
    });
  }, [searchTerm, selectedInstructor, courses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentCourse.title) return alert("Title is required");

    if (editingId !== null) {
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
    <div className="p-6 bg-gray-50 min-h-screen  dark:bg-blue-950">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 dark:text-gray-50">
        Instructor Courses
      </h2>

      <div className="mb-4">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <InstructorFilter
        instructors={instructors}
        selectedInstructor={selectedInstructor}
        onSelectInstructor={setSelectedInstructor}
      />

      <div className="space-y-4 mb-6">
        {filteredCourses.length === 0 ? (
          <p className="text-gray-500">
            No courses found matching your criteria.
          </p>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-300 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Category:</strong> {course.category}
              </p>
              <p>
                <strong>Description:</strong> {course.description}
              </p>
              <button
                onClick={() => handleEdit(course.id)}
                className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Edit
              </button>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={currentCourse.title}
          onChange={(e) =>
            setCurrentCourse({ ...currentCourse, title: e.target.value })
          }
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          name="description"
          placeholder="Course Description"
          value={currentCourse.description}
          onChange={(e) =>
            setCurrentCourse({ ...currentCourse, description: e.target.value })
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </form>
    </div>
  );
}

export default InstructorPanel;
