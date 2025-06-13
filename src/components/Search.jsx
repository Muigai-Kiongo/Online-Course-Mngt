// the component will handle searching of courses and filtering them for  best match to be displayed onchange

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-input"
        placeholder="Search by title, instructor, or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search courses"
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
}
