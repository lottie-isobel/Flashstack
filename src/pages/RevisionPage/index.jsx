import React, { useState, useEffect } from "react";
import { Card } from "../../components";

export default function RevisionPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchFlashstack();
  }, []);

  const fetchFlashstack = async () => {
    try {
      const response = await fetch(
        `https://flashstack-backend.onrender.com/card/deck/${id}`
      );
      const rawData = await response.json();
      const data = rawData.rows.map(d => d.deck);
      setCards(data);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  return (
    <div>
      {cards.map((card, i) => (
        <Card key={i} data={card} />
      ))}
    </div>
  );
}
