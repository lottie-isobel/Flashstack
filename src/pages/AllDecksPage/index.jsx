import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AllDecksPage = () => {
  const { userid } = useAuth();
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState("")
  const navigate = useNavigate();

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

  const addDeck = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch("https://flashstack-backend.onrender.com/deck", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userid: userid,
          name: newDeckName
        })
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error("Error posting deck.")
    }
  }

  const handleNewDeckNameChange = async (e) => {
    setNewDeckName(e.target.value)
  }

  return (
    <div>
      <div className="allDecks">
        <form onSubmit={addDeck}>
          <input value={newDeckName} onChange={handleNewDeckNameChange} />
          <button type="submit">+ Add deck</button>
        </form>
        {"" ||
          decks.map(deck => (
            <div className="deck" key={deck.deckid}>
              <p onClick={() => navigate(`/revise/${deck.deckid}`)}>
                {" "}
                {deck.name}
              </p>
              <div>
                <button
                  onClick={() => navigate(`/newflashcard/${deck.deckid}`)}
                >
                  Add Card
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllDecksPage;
