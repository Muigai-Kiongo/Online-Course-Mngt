import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "./Courses";

const CourseDetailsPage = ({ onEnroll, enrolledCourseIds }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <main>
        <h2>Course not found</h2>
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back to courses list"
        >
          Go Back
        </button>
      </main>
    );
  }

  const isEnrolled = enrolledCourseIds.includes(course.id);

  return (
    <main>
      <h1>{course.title}</h1>
      <p>
        <strong>Instructor:</strong> {course.instructor} |{" "}
        <strong>Category:</strong> {course.category} |{" "}
        <strong>Duration:</strong> {course.duration} | <strong>Rating:</strong>{" "}
        {course.rating}
      </p>
      <img
        src={course.thumbnail}
        alt={`${course.title} course thumbnail`}
        className="course-thumbnail"
      />
      <section>
        <h2>Description</h2>
        <p>{course.description}</p>
      </section>
      <section>
        <h2>Syllabus</h2>
        <ul>
          {course.syllabus.split(",").map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Instructor Info</h2>
        <p>
          {course.instructor} is an experienced professional in the field of{" "}
          {course.category.toLowerCase()} with extensive expertise and passion
          for teaching.
        </p>
      </section>
      <button
        onClick={() => onEnroll(course.id)}
        disabled={isEnrolled}
        aria-label={
          isEnrolled
            ? `Already enrolled in ${course.title}`
            : `Enroll in ${course.title}`
        }
      >
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>
      <button
        onClick={() => navigate(-1)}
        aria-label="Go back to courses list"
        style={{
          marginTop: "16px",
          backgroundColor: "#ddd",
          color: "#555",
          borderRadius: "12px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Back to Courses
      </button>
    </main>
  );
};

export default CourseDetailsPage;
