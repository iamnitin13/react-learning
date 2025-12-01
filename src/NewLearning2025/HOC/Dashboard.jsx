import { useDeferredValue, useState, useTransition } from "react";
import { withAuth } from "./withAuth";
import { useDebounce } from "../Hooks/useDebounce";

function Dashboard(props) {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();
  const debouncedQuery = useDebounce(query);

  // Simulate filtering a large list
  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    // Mark the filtering as a transition (non-urgent)
    startTransition(() => {
      // Simulate heavy filtering
      const fakeList = Array.from({ length: 10000 }, (_, i) => `User ${i}`);
      setList(fakeList);
    });
  }

  // Use deferredQuery to show a less-blocking value
  const deferredList = useDeferredValue(list);

  return (
    <>
      <h1>Welcome {props.name}!</h1>
      <div style={{ padding: 20 }}>
        <h2>Search Users</h2>
        <input
          type="text"
          placeholder="Search username..."
          value={query}
          onChange={handleChange}
          style={{ padding: 10, width: "300px", fontSize: 16 }}
        />
        <p>Immediate Value: {query}</p>
        <p>Debounced Value (500ms): {debouncedQuery}</p>
        {isPending && <p>Loading filtered users...</p>}
        <ul>
          {deferredList.slice(0, 10).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default withAuth(Dashboard);
