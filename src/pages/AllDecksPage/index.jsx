import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const AllDecksPage = () => {
  const { token } = useAuth();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(
          `https://flashstack-backend.onrender.com/user/${token}`,
          options
        );
        console.log(options);
        if (!response.ok) {
          console.error(error);
        }

        const data = await response.json();
        setDecks(data.decks);
        console.log(decks);
      } catch (error) {
        console.error("Error fetching decks");
      }
    };

    fetchDecks();
  }, [token]);

  return (
    <div>
      <h1>All Decks</h1>
      <div>
        {decks.map(deck => (
          <button key={deck.id}>{deck.name}</button>
        ))}
      </div>
    </div>
  );
};

export default AllDecksPage;
