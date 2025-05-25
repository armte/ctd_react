import { useEffect } from 'react';
import { useState } from 'react';

function TodosViewForm({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  const preventRefresh = (ev) => {
    ev.preventDefault();
  };
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500);
    return () => clearTimeout(debounce);
  }, [localQueryString, setQueryString]);

  return (
    <form onSubmit={preventRefresh}>
      <div>
        <label htmlFor="queryString">Search todos:</label>
        <input
          id="queryString"
          name="queryString"
          type="text"
          value={localQueryString}
          onChange={(ev) => setLocalQueryString(ev.target.value)}
        />
        <button type="button" onClick={() => setLocalQueryString('')}>
          Clear
        </button>
      </div>
      <div>
        <label htmlFor="sortField">Sort by</label>
        <select
          id="sortField"
          name="sortField"
          onChange={(ev) => setSortField(ev.target.value)}
          value={sortField}
        >
          <option value="title">Title</option>
          <option value="createdTime">Created Time</option>
        </select>
        <label htmlFor="sortDirection">Direction</label>
        <select
          id="sortDirection"
          name="sortDirection"
          onChange={(ev) => setSortDirection(ev.target.value)}
          value={sortDirection}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
  );
}

export default TodosViewForm;
