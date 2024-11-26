import css from "./SearchBox.module.css";

export default function SearchBox({ searchQuery, setSearchQuery }) {
  return (
    <article>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </article>
  );
}
