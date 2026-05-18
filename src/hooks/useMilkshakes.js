import { useState, useEffect } from 'react';

// This is our custom hook! It always starts with "use"
export function useMilkshakes() {
  const [milkshakes, setMilkshakes] = useState([]);

  // Fetch the data right when the hook is called
  useEffect(() => {
    fetch('http://localhost:3001/milkshakes')
      .then((response) => response.json())
      .then((data) => {
        setMilkshakes(data);
      });
  }, []);

  // We return the data and the function to change the data
  // so that any component using this hook can access them.
  return { milkshakes, setMilkshakes };
}