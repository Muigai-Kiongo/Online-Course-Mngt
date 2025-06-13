// this is the main component entailing header and courses list
import React, { useState, useMemo } from "react";
import { courses } from "./student/Courses";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";
import { Link } from "react-router-dom";

export default function HomePage({ theme, setTheme }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    const cats = new Set();
    courses.forEach((c) => cats.add(c.category));
    return Array.from(cats).sort();
  }, []);

  const filteredCourses = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(term) ||
        course.instructor.toLowerCase().includes(term) ||
        course.category.toLowerCase().includes(term);
      const matchesCategory = selectedCategory
        ? course.category === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main>
      <header>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <div className="course-list">
        {filteredCourses.length === 0 ? (
          <p>No courses found matching your criteria.</p>
        ) : (
          filteredCourses.map((course) => (
            <div key={course.id} className="courseCard">
              <Link to={`/course/${course.id}`}>
                <img
                  className="thumbnail"
                  src={course.thumbnail}
                  alt={`${course.title} course thumbnail`}
                />
                <h2>{course.title}</h2>
                <p className="instructor">Instructor: {course.instructor}</p>
                <p className="category">Category: {course.category}</p>
                <p className="duration">Duration: {course.duration}</p>
                <p className="rating">Rating: {course.rating}</p>
              </Link>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
