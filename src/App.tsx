import React, { useState } from "react";

export default function App(): JSX.Element {
  const [query, setQuery] = useState(""); // New state to store the query

  const runSpider = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/myapp/api/scrape/?query=${encodeURIComponent(
          query
        )}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleQueryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      
    </div>
  );
}