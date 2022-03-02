import { useState, useEffect } from "react";

export default function Home() {
  const [results, setResults] = useState(null);

  async function execute(statement) {
    const res = await fetch("/api/sql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statement }),
    });
    const rows = await res.json();
    setResults(JSON.stringify(rows));
  }

  useEffect(() => {
    execute("select now();", []);
  }, []);

  return (
    <div>
      <pre>{results}</pre>
    </div>
  );
}
