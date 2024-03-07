import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import "./index.css";

const AllDecksPage = () => {
  const { userid } = useAuth();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const response = await fetch(
          `https://flashstack-backend.onrender.com/deck/user/${userid}`
        );

        if (!response.ok) {
          console.error("Error fetching decks");
          return;
        }

        const data = await response.json();
        console.log(data);
        setDecks(data);
      } catch (error) {
        console.error("Error fetching decks", error);
      }
    };

    fetchDecks();
  }, []);

  // if (!decks || decks.length === 0) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      <h1>All Decks</h1>
      <div>
        {"" ||
          decks.map(deck => (
            <div className="deck" key={deck.id}>
              <p> {deck.name}</p>
              <div>
                <button>Add Card</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllDecksPage;
