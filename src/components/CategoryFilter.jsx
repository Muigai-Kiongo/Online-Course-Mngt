export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div
      className="filter-container"
      role="group"
      aria-label="Filter courses by category"
    >
      <button
        className={`filter-button ${selectedCategory === "" ? "selected" : ""}`}
        onClick={() => onSelectCategory("")}
        aria-pressed={selectedCategory === ""}
        aria-label="All categories"
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            selectedCategory === category ? "selected" : ""
          }`}
          onClick={() => onSelectCategory(category)}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
