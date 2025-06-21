import React, { useState, useMemo } from "react";
import Search from "../Search";
import InstructorFilter from "./InstructorFilter";

function InstructorPanel({ courses, setCourses }) {
  const [currentCourse, setCurrentCourse] = useState({
    title: "",
    instructor: "",
    category: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
    setCurrentCourse({
      title: "",
      instructor: "",
      category: "",
      description: "",
    });
    setIsPopupVisible(false);
  };

  const handleEdit = (id) => {
    const courseToEdit = courses.find((c) => c.id === id);
    setCurrentCourse(courseToEdit);
    setEditingId(id);
    setIsPopupVisible(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (confirmDelete) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const handleCreateNew = () => {
    setCurrentCourse({
      title: "",
      instructor: "",
      category: "",
      description: "",
    });
    setEditingId(null);
    setIsPopupVisible(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen dark:bg-blue-950">
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
              className="border border-gray-300 rounded-lg p-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
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
              <button
                onClick={() => handleDelete(course.id)}
                className="ml-4 mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={handleCreateNew}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
      >
        <span className="text-2xl">+</span>
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editingId ? "Edit Course" : "Add Course"}
            </h3>
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
                name="instructor"
                placeholder="Course Instructor"
                value={currentCourse.instructor}
                onChange={(e) =>
                  setCurrentCourse({
                    ...currentCourse,
                    instructor: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                name="category"
                placeholder="Course Category"
                value={currentCourse.category}
                onChange={(e) =>
                  setCurrentCourse({
                    ...currentCourse,
                    category: e.target.value,
                  })
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
                  setCurrentCourse({
                    ...currentCourse,
                    description: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {editingId ? "Update Course" : "Add Course"}
              </button>
              <button
                type="button"
                onClick={() => setIsPopupVisible(false)}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstructorPanel;
