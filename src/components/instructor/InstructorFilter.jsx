import React from "react";

export default function InstructorFilter({
  instructors,
  selectedInstructor,
  onSelectInstructor,
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-50">
        Filter by Instructor
      </label>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectInstructor("")}
          className={`px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg transition-colors ${
            selectedInstructor === ""
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          All Instructors
        </button>

        {instructors.map((instructor) => (
          <button
            key={instructor}
            onClick={() => onSelectInstructor(instructor)}
            className={`px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg transition-colors ${
              selectedInstructor === instructor
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {instructor}
          </button>
        ))}
      </div>
    </div>
  );
}
