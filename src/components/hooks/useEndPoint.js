import { useState, useEffect } from "react";

export default function useEndPoint() {
  const [state, setState] = useState([]);
  const [occupation, setOccupations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://frontend-take-home.fetchrewards.com/form"
      );
      let data = await response.json();
      setState(data.states);
      setOccupations(data.occupations);
    }
    fetchData();
  }, []);
  return { state, occupation };
}
