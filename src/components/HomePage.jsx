// this is the main component entailing header and courses list
import React from "react";
import { courses } from "./student/Courses";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <div>
        {courses.map((course) => (
          <div key={course.id} className="courseCard">
            <Link to={`/course/${course.id}`}>
              <img
                className="thumbnail"
                src={course.thumbnail}
                alt={course.title}
              />
              <h2>{course.title}</h2>
              <p className="duration">{course.duration}</p>
              <p className="brief">{course.brief}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
