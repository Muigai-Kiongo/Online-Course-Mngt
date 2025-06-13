//  The Course enrollment page will contain the course details instructor and student details for the student
//  enrolling the course, for a successful enrollmemt should list as an enrolled course
import React from "react";
import { courses } from "./Courses";

export default function EnrollmentPage({ enrolledCourseIds }) {
  const enrolledCourses = courses.filter((c) =>
    enrolledCourseIds.includes(c.id)
  );

  return (
    <main aria-label="Enrolled courses list" className="container">
      <h2>Your Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p className="no-enrolled">You have not enrolled in any courses yet.</p>
      ) : (
        <div className="enrollment-list">
          {enrolledCourses.map((course) => (
            <article key={course.id} className="enrolled-course">
              <img
                src={course.thumbnail}
                alt={`${course.title} course thumbnail`}
                loading="lazy"
                decoding="async"
              />
              <div className="enrolled-course-info">
                <h3 className="enrolled-course-title">{course.title}</h3>
                <p className="enrolled-course-instructor">
                  {course.instructor}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
